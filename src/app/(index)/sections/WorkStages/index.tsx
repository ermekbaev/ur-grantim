import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Root as AccordionRoot,
  AccordionTrigger,
} from '@radix-ui/react-accordion';

import type { Icon } from '~/icons';
import {
  ArrowDropDownIcon,
  CheckCircleIcon,
  ContractIcon,
  HandshakeIcon,
  ManageSearchIcon,
  SmsIcon,
  SupportIcon,
} from '~/icons/material';
import { workStagesSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

interface Stage {
  Icon: Icon;
  text: string;
  title: string;
}

const stages = [
  {
    Icon: SmsIcon,
    title: 'Бесплатная консультация',
    text: 'Проконсультируем от постановки на налоговый и воинский учет организации до сдачи отчетов',
  },

  {
    Icon: ManageSearchIcon,
    title: 'Выбор формата работы',
    text: 'Подбор системы налогообложения, банка для открытия р/c под ваш вид деятельности',
  },

  {
    Icon: HandshakeIcon,
    title: 'Предложение',
    text: 'Подготовка и согласование коммерческого предложения',
  },

  {
    Icon: CheckCircleIcon,
    title: 'Утверждение',
    text: 'Закрепляем выбранные условия (так как количество мест с текущими условиями ограничено)',
  },

  {
    Icon: ContractIcon,
    title: 'Заключение договора',
    text: 'Заключаем договор на выбранный срок с бесплатным месяцем обслуживания',
  },

  {
    Icon: SupportIcon,
    title: 'Обслуживание и поддержка',
    text: 'Полностью берём на себя под ключ бухгалтерский и кадровый учёт',
  },
] as const satisfies Stage[];

export const WorkStagesSection: FC = () => (
  <section className={styles.sectionClass}>
    <h2 className={styles.headingClass}>Этапы работы</h2>

    <AccordionRoot
      asChild
      type="single"
      defaultValue={stages[0].title}
      className={styles.accordionClass}
    >
      <ol>
        {stages.map(({ Icon, text, title }, index) => (
          <AccordionItem
            key={title}
            asChild
            value={title}
            className={styles.accordionItemClass}
          >
            <li>
              <AccordionHeader asChild>
                <h6>
                  <AccordionTrigger className={styles.accordionTriggerClass}>
                    <span>
                      <span aria-hidden>{index + 1}. </span>
                      {title}
                    </span>

                    <ArrowDropDownIcon
                      aria-hidden
                      className={styles.accordionTriggerArrowClass}
                    />
                  </AccordionTrigger>
                </h6>
              </AccordionHeader>

              <AccordionContent className={styles.accordionContentClass}>
                <Icon
                  aria-hidden
                  className={styles.accordionContentIconClass}
                />
                {text}
              </AccordionContent>
            </li>
          </AccordionItem>
        ))}
      </ol>
    </AccordionRoot>

    <ol className={styles.schemeListClass}>
      {stages.map(({ text, Icon, title }, index) => (
        <li key={title} className={styles.schemeListItemClass}>
          <span aria-hidden className={styles.schemeListItemNumberClass}>
            {(index + 1).toString().padStart(2, '0')}
          </span>

          <span aria-hidden className={styles.schemeListItemArrowClass} />

          <p className={styles.schemeListItemTitleClass}>{title}</p>
          <Icon aria-hidden className={styles.schemeListItemIconClass} />

          <p className={styles.schemeListItemTextClass}>{text}</p>
        </li>
      ))}
    </ol>
  </section>
);
