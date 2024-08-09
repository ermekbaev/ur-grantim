'use client';

import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import { clsx } from 'clsx/lite';
import metadata from 'libphonenumber-js/metadata.max.json';
import Link from 'next/link';
import {
  useId,
  useImperativeHandle,
  type FC,
  type FormHTMLAttributes,
  type Ref,
} from 'react';
import { nonempty, object, string, trimmed, type Infer } from 'superstruct';

import { TextField } from '~/components/TextField';
import { Button } from '~/components/buttons/Button';
import { emailStruct, phoneStruct } from '~/guards/refinements';
import { useImprovedForm } from '~/hooks/imporvedForm/useImprovedForm';
import type { ImprovedFormErrorMessageMap } from '~/hooks/imporvedForm/useImprovedForm/types';
import { Send } from '~/icons/material';
import { contactFormStyles as styles } from './styles.css';

import type { SubmitHandler, UseFormReset } from 'react-hook-form';

const contactFormStruct = object({
  name: nonempty(trimmed(string())),
  phone: phoneStruct(nonempty(trimmed(string()))),
  email: emailStruct(nonempty(trimmed(string()))),
});

export type ContactFormValues = Infer<typeof contactFormStruct>;

const formErrorMessageMap: ImprovedFormErrorMessageMap<ContactFormValues> = {
  name: 'Введите ваше имя',

  email({ type }) {
    if (type === 'nonempty') return 'Введите электронную почту';

    if (type === emailStruct.type)
      return 'Некорректный адрес электронной почты';
  },

  phone({ type }) {
    if (type === 'nonempty') return 'Введите номер телефона';
    if (type === phoneStruct.type) return 'Некорректный номер телефона';
  },
};

const phoneFieldMask = maskitoPhoneOptionsGenerator({
  metadata,
  countryIsoCode: 'RU',
});

interface ContactFormRef {
  reset: UseFormReset<ContactFormValues>;
}

export interface ContactFormProps extends FormHTMLAttributes<HTMLFormElement> {
  ref?: Ref<ContactFormRef>;
  onSubmitSuccessful?(): void;
}

export const ContactForm: FC<ContactFormProps> = ({
  ref,
  onSubmitSuccessful,
  className,
  ...props
}) => {
  const {
    reset,
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useImprovedForm({
    struct: contactFormStruct,
    errorMessageMap: formErrorMessageMap,
  });

  useImperativeHandle(ref, () => ({ reset }), [reset]);

  const submitHandler: SubmitHandler<ContactFormValues> = async (values) => {
    const { ok } = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });

    if (ok) onSubmitSuccessful?.();
    else
      setError('root', {
        message:
          'Произошла неизвестная ошибка. Пожалуйста, повторите попытку позже',
      });
  };

  const termsId = useId();
  const errorMessageId = useId();

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      aria-describedby={clsx(termsId, errors.root && errorMessageId)}
      className={clsx(styles.formClass, className)}
      {...props}
    >
      <TextField
        label="Ваше имя"
        aria-required
        autoCapitalize="words"
        autoComplete="name"
        error={errors.name}
        errorText={errors.name?.message}
        {...register('name')}
      />

      <TextField
        label="Номер телефона"
        type="tel"
        aria-required
        mask={phoneFieldMask}
        error={errors.phone}
        errorText={errors.phone?.message}
        {...register('phone')}
      />

      <TextField
        label="Электронная почта"
        type="email"
        aria-required
        error={errors.email}
        errorText={errors.email?.message}
        {...register('email')}
      />

      {errors.root && (
        <p id={errorMessageId} className={styles.errorMessageClass}>
          {errors.root.message}
        </p>
      )}

      <Button type="submit" variant="filled" icon={Send} loading={isSubmitting}>
        Отправить заявку
      </Button>

      <p id={termsId} className={styles.termsClass}>
        Заполняя форму, вы соглашаетесь на{' '}
        <Link href="/policy">обработку персональных данных</Link>
      </p>
    </form>
  );
};
