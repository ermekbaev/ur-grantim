import { clsx } from 'clsx/lite';
import { Manrope } from 'next/font/google';

import { lightThemeClass } from '~/styles/theme.css';
import type { NextLayout } from '~/types/components/next';
import { CssController } from './CssController';

import type { Metadata } from 'next';

import 'modern-normalize/modern-normalize.css';
import './global.css';

const title = 'Бухгалтерское обслуживание стартапов';

export const metadata: Metadata = {
  title,
  other: { title },

  formatDetection: {
    url: false,
    date: false,
    email: false,
    address: false,
    telephone: false,
  },
};

const font = Manrope({
  display: 'swap',
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],

  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    "'Segoe UI'",
    "'Oxygen'",
    "'Ubuntu'",
    "'Cantarell'",
    "'Fira Sans'",
    "'Droid Sans'",
    "'Helvetica Neue'",
    'sans-serif',

    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
    "'Noto Color Emoji'",
    'emoji',
  ],
});

const RootLayout: NextLayout = ({ children }) => (
  <html lang="ru-RU" className={clsx(font.className, lightThemeClass)}>
    <CssController />
    <body>{children}</body>
  </html>
);

export default RootLayout;
