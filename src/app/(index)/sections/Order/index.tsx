'use client';

import { useRef, useState, type FC } from 'react';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
} from '~/components/Dialog';
import { Button } from '~/components/buttons/Button';
import { Section } from '../Section';
import { ContactForm, type ContactFormValues } from '../../ContactForm';
import { orderSectionStyles as styles } from './styles.css';

import type { UseFormReset } from 'react-hook-form';

export const OrderSection: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<{ reset: UseFormReset<ContactFormValues> }>(null);

  return (
    <Section.Root className={styles.sectionClass}>
      <div>
        <Section.Heading className={styles.headingClass}>
          Оставить заявку
        </Section.Heading>

        <p className={styles.subheadingClass}>
          Мы свяжемся с Вами в течение часа для обсуждения всех деталей
        </p>
      </div>

      <ContactForm
        ref={formRef}
        onSubmitSuccessful={() => setIsDialogOpen(true)}
        className={styles.formClass}
      />

      <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle style={{ marginBottom: '1rem' }}>
            Заявка отправлена
          </DialogTitle>

          <DialogDescription>
            Спасибо, Ваша заявка отправлена. Ожидайте, скоро мы с Вами свяжемся
          </DialogDescription>

          <DialogClose asChild>
            <Button
              variant="text"
              onClick={() => formRef.current?.reset()}
              style={{ marginTop: '1.5rem', marginLeft: 'auto' }}
            >
              Закрыть
            </Button>
          </DialogClose>
        </DialogContent>
      </DialogRoot>
    </Section.Root>
  );
};
