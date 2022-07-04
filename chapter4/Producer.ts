import { Province } from './Province';

export interface Producer {
  province?: Province;
  cost: number;
  name: string;
  production: number;
}

export function setProduction(producer: Producer, production: number): Producer {
  return {
    ...producer,
    ...(producer.province && {
      ...producer.province,
      totalProduction: production - producer.production,
    })
  };
}

export function getProducer(aProvince: Province, data: Producer): Producer {
  return {
    ...data,
    production: data.production || 0,
    province: aProvince,
  }
}
