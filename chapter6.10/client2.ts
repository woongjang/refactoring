import { baseRate, taxThreshold } from './enrichReading';
import { acquireReading } from './main';
// 리팩토링 전
const base = () => {
  const aReading = acquireReading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
};
