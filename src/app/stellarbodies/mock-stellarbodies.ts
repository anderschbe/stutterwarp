import { StellarBody } from './stellarbody';

export const STELLAR_BODIES: StellarBody[] = [
  {id: 1, name: 'Milky Way', mass: 1E+42, parent: 1, parentDistance: 0, radius: 150000000000},
  {id: 2, name: 'Sol', mass: 2E+30, parent: 1, parentDistance: 2.5E+20, radius: 700000000},
  {id: 3, name: 'Terra', mass: 6E+24, parent: 2, parentDistance: 1.5E+11, radius: 6371000},
  {id: 4, name: 'Luna', mass: 6E+24, parent: 3, parentDistance: 3.844E+8, radius: 1737000}
];
