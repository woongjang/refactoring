import { ReadingData } from './types';

export class Reading {
  _customer: string;
  _quantity: number;
  _month: number;
  _year: number;
  constructor(data: ReadingData) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

export function baseRate(month: number, year: number): number {
  return 0;
}

export function taxThreshold(y: number) {
  return 0;
}