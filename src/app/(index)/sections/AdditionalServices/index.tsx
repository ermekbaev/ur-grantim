import type { Icon } from '~/icons';
import {
  AdsClick,
  BusinessCenterIcon,
  FinanceIcon,
  WebIcon,
} from '~/icons/material';
import { additionalServicesSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

interface Service {
  Icon: Icon;
  name: string;
  price: number;
}

const services: Service[] = [
  { Icon: WebIcon, price: 20_000, name: 'Создание сайта проекта' },

  {
    Icon: AdsClick,
    price: 10_000,
    name: 'Проведение маркетинговых исследований по профилю',
  },

  {
    Icon: BusinessCenterIcon,
    price: 20_000,
    name: 'Создание бизнес-плана проекта',
  },

  {
    Icon: FinanceIcon,
    price: 5000,
    name: 'Разработка финансовой модели проекта',
  },
];

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

export const AdditionalServicesSection: FC = () => (
  <section className={styles.sectionClass}>
    <h2 className={styles.headingClass}>Дополнительные услуги</h2>

    <ul className={styles.listClass}>
      {services.map(({ Icon, name, price }) => (
        <li key={name} className={styles.listItemClass}>
          <Icon aria-hidden className={styles.listItemIconClass} />

          <div>
            <p className={styles.listItemPriceClass}>
              {priceFormatter.format(price)}
            </p>

            <p className={styles.listItemNameClass}>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
