import { acquireReading } from './main';
import { baseRate, Reading } from './reading';

// 리팩토링 전
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity

// 리팩토링 후
const rawReading = acquireReading();
const refacReading = new Reading(rawReading);
const baseChrge = refacReading.baseCharge