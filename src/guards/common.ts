import { func, Struct, type Infer } from 'superstruct';

export function anyFunc() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return func() as unknown as Struct<(...args: any[]) => any, null>;
}

export type AnyFunc = Infer<ReturnType<typeof anyFunc>>;

export function unknownFunc() {
  return func() as unknown as Struct<(...args: unknown[]) => unknown, null>;
}

export type UnknownFunc = Infer<ReturnType<typeof unknownFunc>>;
