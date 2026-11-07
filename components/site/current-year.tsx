'use client';
import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const currentYear = () => new Date().getFullYear();

// El HTML estático lleva el año de compilación; al hidratar se usa el año en
// curso, así el pie no se queda anticuado aunque no se republique.
export function CurrentYear({ buildYear }: { buildYear: number }) {
  return <>{useSyncExternalStore(subscribe, currentYear, () => buildYear)}</>;
}
