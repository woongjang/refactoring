import _ from 'lodash';
import { ReadingData } from './types';

// 리팩토링 전
function base(aReading: any) {}
function taxableCharge(aReading: any) {}

// 리팩토링 후
function enrichReading(argReading: any) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}

export function acquireReading(): ReadingData {
  return {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
  };
}
