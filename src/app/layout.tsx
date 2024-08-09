import { labGrotesqueFont } from '~/fonts';
import { darkThemeClass, lightThemeClass } from '~/styles/theme.css';
import type { NextLayout } from '~/types/components/next';
import { CssController } from './CssController';

import type { Metadata } from 'next';

import 'modern-normalize/modern-normalize.css';
import './global.css';

const title = 'Бухгалтерское обслуживание стартапов';
const description = title;

export const metadata: Metadata = {
  title,
  description,

  formatDetection: {
    url: false,
    date: false,
    email: false,
    address: false,
    telephone: false,
  },
};

const RootLayout: NextLayout = ({ children }) => (
  <html lang="ru-RU" className={lightThemeClass}>
    <CssController />
    <body className={labGrotesqueFont.className}>{children}</body>
  </html>
);

export default RootLayout;
