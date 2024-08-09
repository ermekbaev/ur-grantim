'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState, type FC } from 'react';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '~/components/Dialog';
import { Button } from '~/components/buttons/Button';
import { Section } from '../Section';
import { ContactForm } from '../../ContactForm';
import img from './img.svg';
import { introSectionStyles as styles } from './styles.css';

export const IntroSection: FC = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  return (
    <DialogRoot>
      <Section.Root className={styles.sectionClass}>
        <div className={styles.contentClass}>
          <h1 className={styles.headingClass}>
            Бухгалтерское обслуживание стартапов
          </h1>

          <p className={styles.textClass}>
            Профессиональные бухгалтерские услуги для организаций с грантами
            &laquo;Студенческий стартап&raquo; от Фонда содействия инновациям.
            Поможем <strong>бесплатно</strong> открыть ООО, первый месяц
            обслуживания - <strong>в подарок</strong>
          </p>

          <DialogTrigger asChild>
            <Button variant="filled" className={styles.buttonClass}>
              Оставить заявку
            </Button>
          </DialogTrigger>
        </div>

        <Image
          alt=""
          priority
          unoptimized
          src={img as StaticImageData}
          className={styles.imgClass}
        />
      </Section.Root>

      <DialogContent
        transitionProps={{ onExited: () => setIsSubmitSuccessful(false) }}
      >
        <DialogTitle style={{ marginBottom: '1rem' }}>
          {isSubmitSuccessful ? 'Заявка отправлена' : 'Оставить заявку'}
        </DialogTitle>

        {!isSubmitSuccessful ?
          <ContactForm onSubmitSuccessful={() => setIsSubmitSuccessful(true)} />
        : <>
            <DialogDescription>
              Спасибо, Ваша заявка отправлена. Ожидайте, скоро мы с Вами
              свяжемся
            </DialogDescription>

            <DialogClose asChild>
              <Button
                variant="text"
                style={{ marginTop: '1.5rem', marginLeft: 'auto' }}
              >
                Закрыть
              </Button>
            </DialogClose>
          </>
        }
      </DialogContent>
    </DialogRoot>
  );
};
