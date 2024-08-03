import Image, { type StaticImageData } from 'next/image';

import { Button } from '~/components/buttons/Button';
import img from './img.svg';
import * as styles from './styles.css';

import type { FC } from 'react';

export const AboutSection: FC = () => (
  <section className={styles.aboutSectionClass}>
    <div className={styles.aboutSectionContentClass}>
      <h1 className={styles.aboutSectionHeadingClass}>
        Бухгалтерское обслуживание стартапов
      </h1>

      <p className={styles.aboutSectionTextClass}>
        Профессиональные бухгалтерские услуги для стартапов с грантами
        &#x00AB;Студенческий стартап&#x00BB; от Фонда содействия инновациям.
        Поможем бесплатно открыть ООО, первый месяц обслуживания - в подарок
      </p>

      <Button variant="filled">Заказать консультацию</Button>
    </div>

    <Image
      alt=""
      unoptimized
      src={img as StaticImageData}
      className={styles.aboutSectionImgClass}
    />
  </section>
);
