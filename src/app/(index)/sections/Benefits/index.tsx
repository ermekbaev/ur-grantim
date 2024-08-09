import Image from 'next/image';

import { Check } from '~/icons/material';
import { themeVars } from '~/styles/theme.css';
import { Section } from '../Section';
import img from './img.png';
import { benefitsSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

const benefits: string[] = [
  'Большой опыт работы со студенческими стартапами, наша команда занимается ' +
    'этим с 2021 года',

  'С вами будут работать эксперты: победители региональных конкурсов и ' +
    'грантополучатели ФСИ',

  'Обширная практика взаимодействия с гос. органами в соответствии с ' +
    'требованиями фондов и инвесторов',

  'Сами через всё это прошли, поэтому знакомы со всеми нюансами и с радостью' +
    ' поделимся своим опытом',
];

export const BenefitsSection: FC<{ id: string }> = ({ id }) => (
  <Section.Root id={id} className={styles.sectionClass}>
    <Section.Heading>Наши преимущества</Section.Heading>

    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
    <ul role="list" className={styles.listClass}>
      {benefits.map((text) => (
        <li key={text} className={styles.listItemClass}>
          <Check className={styles.listItemMarkerClass} />
          {text}
        </li>
      ))}
    </ul>

    <Image
      alt=""
      src={img}
      quality={80}
      placeholder="blur"
      sizes={[
        `${themeVars.media.maxWidth.sm} 100vw`,
        `${themeVars.media.maxWidth.md} 38rem`,
        `${themeVars.media.maxWidth.xl} 50vw`,
        '37.25rem',
      ].join(', ')}
      className={styles.imgClass}
    />
  </Section.Root>
);
