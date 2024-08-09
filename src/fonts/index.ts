import localFont from 'next/font/local';

export const labGrotesqueFont = localFont({
  src: [
    { path: './files/lab-grotesque-regular.woff2', weight: '400' },
    { path: './files/lab-grotesque-medium.woff2', weight: '500' },
    { path: './files/lab-grotesque-bold.woff2', weight: '700' },
  ],

  style: 'normal',
  display: 'swap',

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
