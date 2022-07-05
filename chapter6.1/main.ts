import { Invoice } from './types';

function calculateOutstanding(): number {
  return 0;
}
function printBanner() {}


function basePrintOwing(invoice: Invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
}

// 리팩토링 후
function refacPrintOwing(invoice: Invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails(outstanding);
  function printDetails(outstanding: number) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
  }
}
