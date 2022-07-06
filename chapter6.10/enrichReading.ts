import _ from 'lodash';
import { ReadingData } from './types';

export function baseRate(month: number, year: number) {
  return 0;
}

export function calculateBaseCharge(aReading: ReadingData) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

export function enrichReading(original: ReadingData) {
  let result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, (result.baseCharge || 0) - taxThreshold(result.year));
  return result;
}

export function taxThreshold(year: number) {
  return 0;
}
