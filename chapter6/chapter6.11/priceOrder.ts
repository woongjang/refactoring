import { PriceData, Product, ShippingMethod } from './types';

// 리팩토링 전
const base = () => {
  function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount =
      Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const shippingPerCase =
      basePrice > shippingMethod.discountThreshold
        ? shippingMethod.discountedFee
        : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }
};

// 리팩토링 후
const refac = () => {
  function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);;
  }

  // 첫번째 단계 분리
  function calculatePricingData(product: Product, quantity: number): PriceData {
    const basePrice = product.basePrice * quantity;
    const discount =
      Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    return {
      basePrice,
      quantity,
      discount,
    };
  }

  // 두번째 단계 분리
  function applyShipping(priceData: PriceData, shippingMethod: ShippingMethod): number {
    const { basePrice, quantity, discount } = priceData;
    const shippingPerCase =
      basePrice > shippingMethod.discountThreshold
        ? shippingMethod.discountedFee
        : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
  }
};
