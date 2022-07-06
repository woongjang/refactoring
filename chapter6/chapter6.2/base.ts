import { Customer, Driver } from './types';

//리팩토링 전
function moreThanFiveLateDeliveries(driver: Driver) {
  return driver.numberOfLateDeliveries > 5;
}

function baseGetRating(driver: Driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}


// 리팩토링 후
function refacGetRating(driver: Driver) {
  return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}


// report
// 리팩토링 전
function baseReportLines(aCustomer: Customer) {
  const lines: string[][] = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out: string[][], aCustomer: Customer) {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
}

// 리팩토링 후
function refacReportLines(aCustomer: Customer) {
  const lines: string[][] = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}


