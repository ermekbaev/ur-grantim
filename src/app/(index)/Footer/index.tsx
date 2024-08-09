import Link from 'next/link';

import { SmartSolutionsLogo } from '~/icons/others';
import { footerStyles as styles } from './styles.css';

import type { FC } from 'react';

export const Footer: FC = () => (
  <footer className={styles.footerClass}>
    <SmartSolutionsLogo className={styles.logoClass} />
    <p>&copy;{new Date().getFullYear()} ООО &laquo;УМНЫЕ РЕШЕНИЯ&raquo;</p>
    <Link href="/policy">Политика обработки персональных данных</Link>
  </footer>
);
