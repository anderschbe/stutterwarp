import { StellarBody } from './stellarbody';

export const STELLAR_BODIES: StellarBody[] = [
  {id: 0, name: '42', mass: 3E+52, parent: 0, parentDistance: 4.4E+26, radius: 4.4E+26},
  {id: 1, name: 'Milky Way', mass: 1E+42, parent: 0, parentDistance: 4.4E+26, radius: 1.5E+11},
  {id: 2, name: 'Sol', mass: 2E+30, parent: 1, parentDistance: 2.5E+20, radius: 7E+8},
  {id: 3, name: 'Terra', mass: 5.974E+24, parent: 2, parentDistance: 1.496E+11, radius: 6.374E+6},
  {id: 4, name: 'Luna', mass: 7E+22, parent: 3, parentDistance: 3.844E+8, radius: 1.738E+6},
  {id: 5, name: 'Mars', mass: 6E+23, parent: 2, parentDistance: 2.28E+11, radius: 3.386E+6},
  {id: 6, name: 'Ceres', mass: 9.393E+20, parent: 2, parentDistance: 4.1394E+11, radius: 4.64E+5},
  {id: 7, name: 'Pallas', mass: 2.34E+20, parent: 2, parentDistance: 4.1595E+11, radius: 2.28E+5},
  {id: 8, name: 'Allotrope', mass: 5E+14, parent: 2, parentDistance: 6E+12, radius: 2E+3},
  {id: 9, name: 'Deep Space', mass: 10, parent: 2, parentDistance: (1E+17), radius: 1}
];
