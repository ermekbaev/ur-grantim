import { additionalServicesSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

interface Service {
  name: string;
  price: number;
}

// Разделить бизнес-план и финансовую модель на две отдельные услуги

const services: Service[] = [
  {
    price: 10_000,
    name: 'Организация воинского учета организации',
  },

  { price: 20_000, name: 'Создание сайта проекта' },
  { price: 10_000, name: 'Проведение маркетинговых исследований по профилю' },

  {
    price: 20_000,
    name: 'Создание Бизнес-плана проекта (если нет своей финансовой модели)',
  },

  {
    price: 15_000,
    name: 'Создание Бизнес-плана проекта (при наличии финансовой модели)',
  },

  { price: 5000, name: 'Помощь в сдаче отчетностей по проекту' },
];

const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
});

export const AdditionalServicesSection: FC = () => (
  <section className={styles.sectionClass}>
    <h2 className={styles.headingClass}>Дополнительные услуги</h2>

    <ul style={{ marginTop: '2rem' }}>
      {services.map(({ name, price }) => (
        <li key={name}>
          {name}: {priceFormatter.format(price)}
        </li>
      ))}
    </ul>
  </section>
);
