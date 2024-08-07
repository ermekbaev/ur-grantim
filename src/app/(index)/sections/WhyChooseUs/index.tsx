import Image from 'next/image';

import img from './img.png';
import { whyChooseUsSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

const listItems: string[] = [
  'Наша команда имеет большой опыт работы со студенческими стартапами с 2021 года',
  'Участники нашей команды являются победителями программ ФСИ (УМНИК, СТУД. СТАРТАП) и региональных грантов',
  'Большой опыт взаимодействия с гос. органами в соответствии с требованиями фондов и инвесторов',
  'Сами через все прошли, знаем все нюансы и подводные камни, с радостью поделимся опытом',
];

export const WhyChooseUsSection: FC = () => (
  <section className={styles.sectionClass}>
    <div>
      <h2 className={styles.headingClass}>Почему нужно выбрать именно нас?</h2>

      <ul className={styles.listClass}>
        {listItems.map((text) => (
          <li key={text} className={styles.listItemClass}>
            {text}
          </li>
        ))}
      </ul>
    </div>

    <Image alt="" src={img} className={styles.imgClass} />
  </section>
);
