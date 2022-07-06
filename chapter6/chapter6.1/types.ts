export interface Invoice {
  customer: string;
  orders: Order[];
  dueDate?: Date;
}

export interface Order {
  amount: number;
}