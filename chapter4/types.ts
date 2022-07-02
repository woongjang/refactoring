import { Producer } from './Producer';

export interface Doc {
  name: string;
  producers: Producer[];
  demand: number;
  price: number;
}
