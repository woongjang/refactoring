import { acquireReading, calculateBaseCharge } from './main';
import { Reading } from './reading';

// 리팩토링 전 
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);


// 리팩토링 후 
const refacRawReading = acquireReading();
const refacReading = new Reading(refacRawReading)
const refacBasicChargeAmount = refacReading.baseCharge;
