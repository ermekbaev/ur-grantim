import { createRef, type Ref, type RefCallback, type RefObject } from 'react';

export function mergeRefs<T>(...refs: Partial<Ref<T>[]>): RefObject<T | null> {
  const nonNullableRefs = refs.filter(Boolean);
  const nonNullableRefsLength = nonNullableRefs.length;

  if (nonNullableRefsLength === 1 && typeof nonNullableRefs[0] === 'object')
    return nonNullableRefs[0];

  const mergedRef = createRef<T>();
  if (nonNullableRefsLength === 0) return mergedRef;

  let cleanupFuncs: ReturnType<RefCallback<T>>[] = [];

  return new Proxy(mergedRef, {
    set(...args) {
      const value = args[2] as T | null;

      if (value !== null) cleanupFuncs = [];
      else for (const cleanup of cleanupFuncs) cleanup?.();

      for (const ref of nonNullableRefs)
        if (typeof ref === 'object') ref.current = value;
        else if (value !== null) cleanupFuncs.push(ref(value));

      return Reflect.set(...args);
    },
  });
}
