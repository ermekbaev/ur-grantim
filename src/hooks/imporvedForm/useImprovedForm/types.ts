import type { ImprovedFormFieldElement, ImprovedFormValues } from '../types';

import type { ChangeEvent, FocusEvent, RefCallback } from 'react';
import type {
  FieldError,
  Path,
  RegisterOptions,
  UseFormProps,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';
import type { Struct, validate } from 'superstruct';
import type { Except } from 'type-fest';

//* ================================= register =================================

export interface ImprovedFormRegisterOptions<
  V extends ImprovedFormValues,
  N extends Path<V>,
  E extends ImprovedFormFieldElement,
> extends Pick<
    RegisterOptions<V, N>,
    'deps' | 'disabled' | 'shouldUnregister' | 'value'
  > {
  onBlur?(event: FocusEvent<E>): void;
  onChange?(event: ChangeEvent<E>): void;
}

export interface ImprovedFormRegisterReturn<
  N extends Path<ImprovedFormValues>,
  E extends ImprovedFormFieldElement,
> extends Pick<UseFormRegisterReturn<N>, 'disabled' | 'name'> {
  ref: RefCallback<E>;
  onBlur(event: FocusEvent<E>): Promise<boolean | undefined>;
  onChange(event: ChangeEvent<E>): Promise<boolean | undefined>;
}

export type ImprovedFormRegister<V extends ImprovedFormValues> = <
  N extends Path<V>,
  E extends ImprovedFormFieldElement,
>(
  name: N,
  options?: ImprovedFormRegisterOptions<V, N, E>,
) => ImprovedFormRegisterReturn<N, E>;

//* ================================= useForm ==================================

export type ImprovedFormResolverOptions = Parameters<typeof validate>[2];

export type ImprovedFormErrorMessageMap<V extends ImprovedFormValues> = {
  [K in Path<V>]?: string | ((error: FieldError) => string | undefined);
};

export interface ImprovedFormContext<V extends ImprovedFormValues> {
  errorMessageMap: ImprovedFormErrorMessageMap<V> | undefined;
}

export interface UseImprovedFormProps<V extends ImprovedFormValues>
  extends Pick<
    UseFormProps<V, ImprovedFormContext<V>>,
    | 'disabled'
    | 'shouldUnregister'
    | 'defaultValues'
    | 'values'
    | 'errors'
    | 'resetOptions'
    | 'shouldFocusError'
    | 'criteriaMode'
    | 'delayError'
  > {
  struct: Struct<V>;
  resolverOptions?: ImprovedFormResolverOptions;
  errorMessageMap?: ImprovedFormErrorMessageMap<V>;
}

export interface UseImprovedFormReturn<V extends ImprovedFormValues>
  extends Except<UseFormReturn<V, ImprovedFormContext<V>>, 'register'> {
  register: ImprovedFormRegister<V>;
}
