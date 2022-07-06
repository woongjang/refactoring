import { calculateBaseCharge, enrichReading } from './enrichReading';
import { acquireReading } from './main';
import { ReadingData } from './types';

const base = () => {
  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);
};


// 리팩토링 후
const refac = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}