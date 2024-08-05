import Image, { type StaticImageData } from 'next/image';

import { Button } from '~/components/buttons/Button';
import img from './img.svg';
import { aboutUsSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

export const AboutUsSection: FC = () => (
  <section className={styles.sectionClass}>
    <div className={styles.contentClass}>
      <h1 className={styles.headingClass}>
        Бухгалтерское обслуживание стартапов
      </h1>

      <p className={styles.textClass}>
        Профессиональные бухгалтерские услуги для стартапов с грантами
        &#x00AB;Студенческий стартап&#x00BB; от Фонда содействия инновациям.
        Поможем бесплатно открыть ООО, первый месяц обслуживания - в подарок
      </p>

      <Button variant="filled">Заказать консультацию</Button>
    </div>

    <Image
      alt=""
      priority
      unoptimized
      src={img as StaticImageData}
      className={styles.imgClass}
    />
  </section>
);
