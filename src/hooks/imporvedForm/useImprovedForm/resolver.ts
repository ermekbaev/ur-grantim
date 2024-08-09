import { toNestErrors } from '@hookform/resolvers';

import type { ImprovedFormValues } from '../types';
import type { ImprovedFormContext, ImprovedFormResolverOptions } from './types';

import type {
  FieldError,
  Path,
  Resolver,
  ResolverOptions,
} from 'react-hook-form';
import type { Struct, StructError } from 'superstruct';

function parseError<V extends ImprovedFormValues>(
  structError: StructError,
  context: ImprovedFormContext<V> | undefined,
  resolverOptions: ResolverOptions<V>,
) {
  const errors: Record<string, FieldError> = {};
  const gatherAllErrors = resolverOptions.criteriaMode === 'all';

  for (const {
    message,
    refinement,
    type: failureType,
    path: pathSegments,
  } of structError.failures()) {
    const path = pathSegments.join('.');
    const type = refinement || failureType;

    let error = errors[path];

    if (!error) {
      error = { type, message };
      if (gatherAllErrors) error.types = { [type]: [message] };

      errors[path] = error;
      continue;
    }

    if (gatherAllErrors) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const types = error.types!;
      const result = types[type] as string[] | undefined;

      if (result) result.push(message);
      else types[type] = [message];
    }
  }

  if (context?.errorMessageMap)
    for (const [path, error] of Object.entries(errors)) {
      const messageOrMessageGetter = context.errorMessageMap[path as Path<V>];

      const message =
        typeof messageOrMessageGetter === 'string' ?
          messageOrMessageGetter
        : messageOrMessageGetter?.(error);

      if (message) error.message = message;
    }

  return errors;
}

export function improvedFormResolver<V extends ImprovedFormValues>(
  struct: Struct<V>,
  validationOptions?: ImprovedFormResolverOptions,
): Resolver<V, ImprovedFormContext<V>> {
  return (formValues, context, resolverOptions) => {
    const [error, values] = struct.validate(formValues, validationOptions);
    if (!error) return { values, errors: {} };

    const errors = toNestErrors(
      parseError(error, context, resolverOptions),
      resolverOptions,
    );

    return { errors, values: {} };
  };
}
