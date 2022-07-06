// 리팩토링 전
const orderString = '0-0 1-1';
const priceList: number[] = []

const base = () => {
  const orderData = orderString.split(/\s+/);
  const productPrice = priceList[Number(orderData[0].split('-')[1])];
  const orderPrice = parseInt(orderData[1]) * productPrice;
}


// 리팩토링 후
type Order = {
  productID: number;
  quantity: number;
}
const refac = () => {
  const orderRecord = parseOrder(orderString);
  const orderPrice = price(orderRecord, priceList);

  function parseOrder(aString: string): Order {
    const values = aString.split(/\s+/);
    return ({
      productID: Number(values[0].split('-')[1]),
      quantity: parseInt(values[1]),
    });
  }
  function price(order: Order, priceList: number[]) {
    return order.quantity * priceList[order.productID];
  }
}