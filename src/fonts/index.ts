import localFont from 'next/font/local';

export const labGrotesqueFont = localFont({
  src: [
    { path: './files/labgrotesque-regular.woff2', weight: '400' },
    { path: './files/labgrotesque-medium.woff2', weight: '500' },
    { path: './files/labgrotesque-bold.woff2', weight: '700' },
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
