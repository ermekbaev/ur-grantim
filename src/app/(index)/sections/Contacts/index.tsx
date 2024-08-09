import { Section } from '../Section';
import { contactsSectionStyles as styles } from './styles.css';

import type { FC } from 'react';

export const ContactsSection: FC<{ id: string }> = ({ id }) => (
  <Section.Root id={id} className={styles.sectionClass}>
    <Section.Heading>Контакты</Section.Heading>

    <address className={styles.addressClass}>
      <p>ООО «УМНЫЕ РЕШЕНИЯ»</p>
      <p>ИНН: 6320076916</p>
      <p>Адрес: Самарская обл., г. Тольятти, Приморский б-р, влд. 31</p>

      <p>
        Телефон: <a href="tel:+78974324446">+7 (987) 43-24-446</a>
      </p>

      <p>
        Эл. почта: <a href="mailto:mail@urstartup.ru">mail@urstartup.ru</a>
      </p>
    </address>

    <div className={styles.mapContainerClass}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A30355eae3d57cac2e647943315146868fec3e9ff81e453b38bb9d52eca9bcaf8&amp;source=constructor"
        width={736}
        height={414}
        loading="lazy"
        title="Мы на карте"
        className={styles.mapClass}
      />
    </div>
  </Section.Root>
);
