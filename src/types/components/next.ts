import type { PropsWithRequiredChildren } from '.';
import type { useParams } from 'next/navigation';
import type { FC } from 'react';

export type NextParams = ReturnType<typeof useParams>;

//* Layout

export interface NextLayoutProps<P extends NextParams = NextParams>
  extends PropsWithRequiredChildren<{ params: P }> {}

export type NextLayout<P extends NextParams = NextParams> = FC<
  NextLayoutProps<P>
>;

//* Page

export interface NextPageProps<P extends NextParams = NextParams> {
  params: P;
  searchParams: NextParams;
}

export type NextPage<P extends NextParams = NextParams> = FC<NextPageProps<P>>;
