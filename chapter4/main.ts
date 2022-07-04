import { getProvince, Province } from './Province';
import { Producer } from './Producer';

const producers: Producer[] = [
  { name: 'Byzantium', cost: 10, production: 9 },
  { name: 'Attalia', cost: 12, production: 10 },
  { name: 'Sinope', cost: 10, production: 6 },
];

const province: Province = {
  name: 'Asia',
    producers: producers,
    demand: 30,
    price: 20,
    totalProduction: 0,
}
export function sampleProvinceData(): Province {
  return getProvince(province);
}
