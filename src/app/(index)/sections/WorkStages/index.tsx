import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Root as AccordionRoot,
  AccordionTrigger,
} from '@radix-ui/react-accordion';

import type { Icon } from '~/icons';
import {
  ArrowDropDown,
  CheckCircle,
  Contract,
  Handshake,
  ManageSearch,
  Sms,
  Support,
} from '~/icons/material';
import { Section } from '../Section';
import { workStagesSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

interface Stage {
  Icon: Icon;
  text: string;
  title: string;
}

const stages = [
  {
    Icon: Sms,
    title: 'Бесплатная консультация',
    text: 'Проконсультируем от постановки на налоговый и воинский учет организации до сдачи отчетов',
  },

  {
    Icon: ManageSearch,
    title: 'Выбор формата работы',
    text: 'Подбор системы налогообложения, банка для открытия р/c под ваш вид деятельности',
  },

  {
    Icon: Handshake,
    title: 'Предложение',
    text: 'Подготовка и согласование коммерческого предложения',
  },

  {
    Icon: CheckCircle,
    title: 'Утверждение',
    text: 'Закрепляем выбранные условия (так как количество мест с текущими условиями ограничено)',
  },

  {
    Icon: Contract,
    title: 'Заключение договора',
    text: 'Заключаем договор на выбранный срок с бесплатным месяцем обслуживания',
  },

  {
    Icon: Support,
    title: 'Обслуживание и поддержка',
    text: 'Полностью берём на себя &laquo;под ключ&raquo; бухгалтерский и кадровый учёт',
  },
] as const satisfies Stage[];

export const WorkStagesSection: FC<{ id: string }> = ({ id }) => (
  <Section.Root id={id} className={styles.sectionClass}>
    <Section.Heading>Этапы работы</Section.Heading>

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

                    <ArrowDropDown
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

                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: text }} />
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

          <p
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: text }}
            className={styles.schemeListItemTextClass}
          />
        </li>
      ))}
    </ol>
  </Section.Root>
);
