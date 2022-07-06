import { acquireReading } from './main';
import { baseRate, Reading, taxThreshold } from './reading';

// 리팩토링 전
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
// function taxThreshold(y: number) {
//   return 0;
// }

// 리팩토링 후
const rawReading = acquireReading();
const refacReading = new Reading(rawReading);
const refacTaxableCharge = refacReading.taxableCharge;