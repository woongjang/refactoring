export interface Product {
  basePrice: number;
  discountThreshold: number;
  discountRate: number;
}

export interface ShippingMethod {
  discountThreshold: number;
  discountedFee: number;
  feePerCase: number;
}

export interface PriceData {
  basePrice: number;
  quantity: number;
  discount: number;
}