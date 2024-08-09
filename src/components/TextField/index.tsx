'use client';

import { useMaskito } from '@maskito/react';
import {
  useMemo,
  type FC,
  type HTMLInputAutoCompleteAttribute,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type Ref,
} from 'react';

import { useId } from '~/hooks/useId';
import { mergeRefs } from '~/utils/mergeRefs';
import * as styles from './styles.css';

import type { MaskitoMask, MaskitoOptions } from '@maskito/core';
import type { Except } from 'type-fest';

//* ================================== Types ===================================

type HTMLTextInputTypeAttribute = Extract<
  HTMLInputTypeAttribute,
  'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
>;

type HTMLInputAutoCapitalizeAttribute =
  | 'none'
  | 'sentences'
  | 'words'
  | 'characters';

type TextInputHTMLAttributes = Except<
  InputHTMLAttributes<HTMLInputElement>,
  | 'accept'
  | 'alt'
  | 'capture'
  | 'checked'
  | 'children'
  | 'defaultChecked'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'height'
  | 'max'
  | 'min'
  | 'multiple'
  | 'src'
  | 'step'
  | 'width'
>;

export interface TextFieldProps
  extends Except<TextInputHTMLAttributes, 'autoCorrect'> {
  label?: string;
  ref?: Ref<HTMLInputElement>;
  type?: HTMLTextInputTypeAttribute;
  mask?: MaskitoMask | MaskitoOptions;

  error?: unknown;
  errorText?: string;
  supportingText?: string;

  autoCorrect?: boolean;
  autoCapitalize?: HTMLInputAutoCapitalizeAttribute;
}

//* ================================== Utils ===================================

// See: https://maskito.dev/supported-input-types
const MASKITO_SUPPORTED_INPUT_TYPES = [
  'password',
  'search',
  'tel',
  'text',
  'url',
] as const satisfies HTMLTextInputTypeAttribute[];

//* ================================ Component =================================

export const TextField: FC<TextFieldProps> = ({
  ref,
  mask,
  label,
  type = 'text',

  error,
  errorText,
  supportingText,

  id,
  autoCorrect,
  ...props
}) => {
  const maskOptions: MaskitoOptions | undefined = useMemo(() => {
    if (
      Array.isArray(mask) ||
      mask instanceof RegExp ||
      typeof mask === 'function'
    )
      return { mask };

    return mask;
  }, [mask]);

  const maskitoRef = useMaskito({ options: maskOptions });
  const inputRef = useMemo(() => mergeRefs(ref, maskitoRef), [maskitoRef, ref]);

  const inputType: HTMLTextInputTypeAttribute =
    !maskOptions || MASKITO_SUPPORTED_INPUT_TYPES.includes(type) ?
      type
    : 'text';

  let defaultInputMode: NonNullable<TextInputHTMLAttributes['inputMode']> =
    'text';

  if (type === 'email' || type === 'search' || type === 'tel' || type === 'url')
    defaultInputMode = type;

  let defaultAutoComplete: HTMLInputAutoCompleteAttribute = 'off';

  if (type === 'email' || type === 'tel' || type === 'url')
    defaultAutoComplete = type;

  const inputId = useId(id);
  const supportingTextId = useId();

  const invalid = !!error;
  const showErrorText = invalid && !!errorText;
  const showSupportingText = showErrorText || !!supportingText;

  let ariaDescribedBy: string | undefined;
  let ariaErrorMessage: string | undefined;
  if (showErrorText) ariaErrorMessage = supportingTextId;
  else if (showSupportingText) ariaDescribedBy = supportingTextId;

  return (
    <div className={styles.textFieldClass}>
      <div className={styles.textFieldInputWrapperClass}>
        {!!label && (
          <label htmlFor={inputId} className={styles.textFieldLabelClass}>
            {label}
          </label>
        )}

        <input
          ref={inputRef}
          type={inputType}
          spellCheck={false}
          autoCapitalize="none"
          inputMode={defaultInputMode}
          autoComplete={defaultAutoComplete}
          autoCorrect={autoCorrect ? 'on' : 'off'}
          id={inputId}
          aria-invalid={invalid}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={ariaErrorMessage}
          className={styles.textFieldInputClass}
          {...props}
        />

        <span aria-hidden className={styles.textFieldOutlineClass}>
          <span className={styles.textFieldOutlineStartClass} />

          {!!label && (
            <span className={styles.textFieldOutlineNotchClass}>
              <span className={styles.textFieldOutlineLabelClass}>{label}</span>
            </span>
          )}

          <span className={styles.textFieldOutlineEndClass} />
        </span>
      </div>

      {showSupportingText && (
        <p
          id={supportingTextId}
          role={showErrorText ? 'alert' : undefined}
          className={styles.textFieldSupportingTextClass}
        >
          {showErrorText ? errorText : supportingText}
        </p>
      )}
    </div>
  );
};
