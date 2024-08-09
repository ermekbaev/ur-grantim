import type { Ref, RefCallback, RefObject } from 'react';

export function mergeRefs<T>(...refs: Partial<Ref<T>[]>): RefCallback<T> {
  const refCallbacks: RefCallback<T>[] = [];
  const refObjects: RefObject<T | null>[] = [];

  for (const ref of refs)
    if (typeof ref === 'function') refCallbacks.push(ref);
    else if (ref) refObjects.push(ref);

  return (instance) => {
    for (const ref of refObjects) ref.current = instance;
    const cleanupFuncs = refCallbacks.map((ref) => ref(instance));

    return () => {
      for (const cleanup of cleanupFuncs) cleanup?.();
      for (const ref of refObjects) ref.current = null;
    };
  };
}
