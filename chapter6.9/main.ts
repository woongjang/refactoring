import { ReadingData } from './types';
// 여러 함수를 클래스로 묶기

// 리팩토링 전
export function base(aReading: ReadingData) {}
export function taxableCharge(aReading: ReadingData) {}
export function calculateBaseCharge(aReading: ReadingData) {}

// 리팩토링 후
class Reading {
  base() {}
  taxableCharge() {}
  calculateBaseCharge() {}
}

export function acquireReading(): ReadingData {
  return {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
  };
}
