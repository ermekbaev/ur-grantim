import type { PropsWithChildren } from 'react';
import type { SetRequired } from 'type-fest';

export type PropsWithAsChild<P = unknown> = P & { asChild?: boolean };

export type PropsWithRequiredChildren<P = unknown> = SetRequired<
  PropsWithChildren<P>,
  'children'
>;
