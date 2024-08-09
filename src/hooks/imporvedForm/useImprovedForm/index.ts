import { useRef, type ChangeEvent } from 'react';
import {
  get,
  useForm,
  type FieldErrors,
  type FieldErrorsImpl,
  type Path,
} from 'react-hook-form';

import type { ImprovedFormFieldElement, ImprovedFormValues } from '../types';
import { improvedFormResolver } from './resolver';
import type {
  ImprovedFormRegisterOptions,
  ImprovedFormRegisterReturn,
  UseImprovedFormProps,
  UseImprovedFormReturn,
} from './types';

import type { ValueOf } from 'type-fest';

const getError = <V extends ImprovedFormValues>(
  errors: FieldErrors<V>,
  path: Path<V>,
) => get(errors, path) as ValueOf<FieldErrorsImpl<V>>;

export function useImprovedForm<V extends ImprovedFormValues>({
  struct,
  errorMessageMap,
  resolverOptions,
  ...props
}: UseImprovedFormProps<V>) {
  const resolver = improvedFormResolver(struct, {
    coerce: true,
    ...resolverOptions,
  });

  const form = useForm({
    resolver,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    context: { errorMessageMap },
    ...props,
  });

  const { register: originalRegister } = form;

  const register = useRef(function register<
    N extends Path<V>,
    E extends ImprovedFormFieldElement,
  >(name: N, options?: ImprovedFormRegisterOptions<V, N, E>) {
    const onChange = async (event: ChangeEvent<E>) => {
      options?.onChange?.(event);
      const prevError = getError(form.formState.errors, name);

      if (prevError) {
        // eslint-disable-next-line no-underscore-dangle
        const { errors } = await form.control._executeSchema([name]);
        const nextError = getError(errors, name);

        if (!nextError) form.clearErrors(name);
        else form.setError(name, nextError);
      }
    };

    return originalRegister(name, {
      ...options,
      onChange,
    }) as ImprovedFormRegisterReturn<N, E>;
  }).current;

  return Object.assign(form, { register }) as UseImprovedFormReturn<V>;
}
