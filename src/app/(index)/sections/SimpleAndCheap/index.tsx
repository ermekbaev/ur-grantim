import type { Icon } from '~/icons';
import {
  AccountBalanceWalletIcon,
  AssuredWorkloadIcon,
  CalculateIcon,
  CheckCircleIcon,
  ContractIcon,
  CurrencyRubleIcon,
} from '~/icons/material';
import { simpleAndCheapSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

interface Service {
  Icon: Icon;
  text: string;
}

const services: Service[] = [
  {
    Icon: AssuredWorkloadIcon,
    text: 'Загрузка банковских выписок по счетам, формирование платёжных поручений на уплату з/п, налогов и взносов',
  },

  {
    Icon: CalculateIcon,
    text: 'Расчёт аванса и ЗП, налогов и взносов по сотрудникам, договоры ГПХ, выплаты самозанятым',
  },

  {
    Icon: ContractIcon,
    text: 'Подготовка и сдача отчётов по сотрудникам (персонифицированные сведения, РСВ, НДФЛ, ЕФС)',
  },

  {
    Icon: CheckCircleIcon,
    text: 'Подготовка ответов на требования в рамках камеральных проверок, уведомление по ЕНП',
  },

  {
    Icon: CurrencyRubleIcon,
    text: 'Начисление и выплата больничных листов, начисление отпускных выплат',
  },

  {
    Icon: AccountBalanceWalletIcon,
    text: 'Увольнение/приём (трудовой договор, должностная инструкция по данным от клиента, приказ)',
  },
];

export const SimpleAndCheapSection: FC = () => (
  <section className={styles.sectionClass}>
    <header className={styles.headerClass}>
      <h2 className={styles.headingClass}>У нас всё просто и недорого</h2>

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
  </section>
);
