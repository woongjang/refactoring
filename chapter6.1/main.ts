import { printOwing } from './refac';
import { Invoice } from './types';

const invoice: Invoice = {
  customer: 'WON',
  orders: [{ amount: 2 }, { amount: 1 }, { amount: 3 }],
};

printOwing(invoice);
