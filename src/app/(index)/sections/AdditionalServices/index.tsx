import type { Icon } from '~/icons';
import { BusinessCenter, Finance, QueryStats, Web } from '~/icons/material';
import { Section } from '../Section';
import { additionalServicesSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

interface Service {
  Icon: Icon;
  name: string;
  price: number;
}

const services: Service[] = [
  {
    Icon: Finance,
    name: 'Построение финансовой модели организации',
    price: 5000,
  },

  {
    Icon: BusinessCenter,
    name: 'Составление бизнес-плана проекта',
    price: 15_000,
  },

  { Icon: Web, name: 'Разработка веб-сайта организации', price: 15_000 },

  {
    Icon: QueryStats,
    name: 'Проведение маркетинговых исследований по профилю',
    price: 10_000,
  },
];

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

export const AdditionalServicesSection: FC = () => (
  <Section.Root>
    <Section.Heading>Дополнительные услуги</Section.Heading>

    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
    <ul role="list" className={styles.listClass}>
      {services.map(({ Icon, price, name }) => (
        <li key={name} className={styles.listItemClass}>
          <Icon className={styles.listItemIconClass} />

          <div>
            <h6 className={styles.listItemPriceClass}>
              {priceFormatter.format(price)}
            </h6>

            <p className={styles.listItemNameClass}>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section.Root>
);
