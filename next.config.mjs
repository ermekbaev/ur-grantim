// @ts-check

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
};

const withVanillaExtract = createVanillaExtractPlugin();
export default withVanillaExtract(nextConfig);
