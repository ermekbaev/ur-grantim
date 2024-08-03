'use client';

import {
  useCallback,
  type FC,
  type HTMLInputAutoCompleteAttribute,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type Ref,
} from 'react';
import { enums } from 'superstruct';

import type { MaskitoMask, MaskitoOptions } from '@maskito/core';
import type { Except } from 'type-fest';

//* ================================== Types ===================================

type TextFieldType = Extract<
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
  type?: TextFieldType;
  ref?: Ref<HTMLInputElement>;

  autoCorrect?: boolean;
  autoCapitalize?: HTMLInputAutoCapitalizeAttribute;
}

//* ================================== Utils ===================================

// See: https://maskito.dev/supported-input-types
const maskitoSupportedInputTypeStruct = enums([
  'password',
  'search',
  'tel',
  'text',
  'url',
] satisfies TextFieldType[]);

//* ================================ Component =================================

export const TextField: FC<TextFieldProps> = ({
  type,
  label,

  autoCorrect,
  ...props
}) => {
  let defaultAutoComplete: HTMLInputAutoCompleteAttribute = 'off';

  if (type === 'email' || type === 'tel' || type === 'url')
    defaultAutoComplete = type;

  let defaultInputMode: NonNullable<TextInputHTMLAttributes['inputMode']> =
    'text';

  if (type === 'email' || type === 'search' || type === 'tel' || type === 'url')
    defaultInputMode = type;

  return (
    <div>
      <div>
        <input
          spellCheck={false}
          autoCapitalize="none"
          inputMode={defaultInputMode}
          autoComplete={defaultAutoComplete}
          autoCorrect={autoCorrect ? 'on' : 'off'}
          {...props}
        />
      </div>
    </div>
  );
};
