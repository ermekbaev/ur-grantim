import { parsePhoneNumberWithError } from 'libphonenumber-js';
import { Struct, refine, string, type Context, type Result } from 'superstruct';
import isEmail, { type IsEmailOptions } from 'validator/lib/isEmail';

//* ================================== Create ==================================

type Refiner<T = unknown, A extends unknown[] = unknown[]> = (
  value: T,
  context: Context,
  ...args: A
) => Result;

interface RefinementWithRequiredStruct<
  BT = unknown,
  A extends unknown[] = unknown[],
> {
  type: string;
  <T extends BT, S>(struct: Struct<T, S>, ...args: A): Struct<T, S>;
}

interface RefinementWithOptionalStruct<
  DT = unknown,
  DS = unknown,
  A extends unknown[] = unknown[],
> extends RefinementWithRequiredStruct<DT, A> {
  (...args: A): Struct<DT, DS>;
}

function createRefinement<BT, A extends unknown[]>(
  name: string,
  refiner: Refiner<BT, A>,
): RefinementWithRequiredStruct<BT, A>;

function createRefinement<DT, DS, A extends unknown[]>(
  name: string,
  defaultStruct: Struct<DT, DS>,
  refiner: Refiner<DT, A>,
): RefinementWithOptionalStruct<DT, DS, A>;

function createRefinement(
  name: string,
  ...createArgs: [Refiner] | [Struct, Refiner]
) {
  let refiner: Refiner;
  let defaultStruct: Struct | undefined;

  if (createArgs.length === 1) [refiner] = createArgs;
  else [defaultStruct, refiner] = createArgs;

  const refinement: RefinementWithOptionalStruct = (
    ...refinementArgs: unknown[]
  ) => {
    let struct = defaultStruct;
    let refinerArgs: unknown[];

    if (refinementArgs[0] instanceof Struct)
      [struct, ...refinerArgs] = refinementArgs;
    else refinerArgs = refinementArgs;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return refine(struct!, name, (value, context) =>
      refiner(value, context, ...refinerArgs),
    );
  };

  refinement.type = name;
  return refinement;
}

//* ================================== Email ===================================

export const emailStruct = createRefinement(
  'email',
  string(),
  (value, _, options?: IsEmailOptions) => isEmail(value, options),
);

//* ================================== Phone ===================================

export const phoneStruct = createRefinement('phone', string(), (value) => {
  try {
    return parsePhoneNumberWithError(value, { extract: false }).isValid();
  } catch {
    return false;
  }
});
