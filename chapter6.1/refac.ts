// 유효 범위를 벗어나는 변수가 없을 때

import { Invoice } from './types';

export function printOwing(invoice: Invoice) {
  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  const outstanding = calculateOutstanding(invoice);

  // 마감일(dueDate)을 기록한다. 오늘 + 30일 설정
  invoice.dueDate = new Date(2022, 7, 5 + 30);

  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice: Invoice) {
  return invoice.orders.reduce((result, order, index) => {
    return (result += order.amount);
  }, 0);
}

function printDetails(invoice: Invoice, outstanding: number) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  if (invoice.dueDate) console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}
function printBanner() {
  console.log('*****************');
  console.log('**** 고객채무 ****');
  console.log('*****************');
}
