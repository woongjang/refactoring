import { Province } from './Province';

export class Producer {
  _province: Province;
  _cost: number;
  _name: string;
  _production: number;

  constructor(aProvince: Province, data: Producer) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0;
  }

  get name() {
    return this._name;
  }
  get cost() {
    return this._cost;
  }
  set cost(arg: number) {
    this._cost = arg;
  }

  get production() {
    return this._production;
  }
  set production(arg: number) {
    this._province.totalProduction += arg - this._production;
    this._production = arg;
  }
}
