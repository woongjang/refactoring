import { baseRate, enrichReading, taxThreshold } from './enrichReading';
import { acquireReading } from './main';
// 현재 챕터부터 변수명이 같아서 base / refac 함수로 묶어서 나눔
// 리팩토링 전
const base = () => {
  const aReading = acquireReading();
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
};

// 리팩토링 후
const refac = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const { taxableCharge } = aReading;
};
