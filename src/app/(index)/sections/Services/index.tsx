import type { Icon } from '~/icons';
import {
  AccountBalanceWallet,
  AssuredWorkload,
  Calculate,
  CheckCircle,
  Contract,
  CurrencyRuble,
} from '~/icons/material';
import { Section } from '../Section';
import { servicesSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

interface Service {
  Icon: Icon;
  text: string;
}

const services: Service[] = [
  {
    Icon: AssuredWorkload,
    text: 'Загрузка банковских выписок по счетам, формирование платёжных поручений на уплату з/п, налогов и взносов',
  },

  {
    Icon: Calculate,
    text: 'Расчёт аванса и ЗП, налогов и взносов по сотрудникам, договоры ГПХ, выплаты самозанятым',
  },

  {
    Icon: Contract,
    text: 'Подготовка и сдача отчётов по сотрудникам (персонифицированные сведения, РСВ, НДФЛ, ЕФС)',
  },

  {
    Icon: CheckCircle,
    text: 'Подготовка ответов на требования в рамках камеральных проверок, уведомление по ЕНП',
  },

  {
    Icon: CurrencyRuble,
    text: 'Начисление и выплата больничных листов, начисление отпускных выплат',
  },

  {
    Icon: AccountBalanceWallet,
    text: 'Увольнение/приём (трудовой договор, должностная инструкция по данным от клиента, приказ)',
  },
];

export const ServicesSection: FC<{ id: string }> = ({ id }) => (
  <Section.Root id={id}>
    <header className={styles.headerClass}>
      <Section.Heading className={styles.headingClass}>
        У нас всё просто и недорого
      </Section.Heading>

      <p className={styles.headerTextClass}>
        1 пакет условий, в который входит всё необходимое для вашей организации
      </p>
    </header>

    <ul className={styles.listClass}>
      {services.map(({ Icon, text }) => (
        <li key={text} className={styles.listItemClass}>
          <Icon aria-hidden className={styles.listItemIconClass} />
          {text}
        </li>
      ))}
    </ul>

    <p className={styles.priceClass}>
      Цена:{' '}
      <strong>
        всего <span>24000</span> 12000 рублей
      </strong>{' '}
      в месяц при заключении договора до 30 сентября 2024
    </p>
  </Section.Root>
);
