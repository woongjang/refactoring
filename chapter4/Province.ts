import { getProducer, Producer } from './Producer';

export interface Province {
  name: string;
  producers: Producer[];
  totalProduction: number;
  demand: number;
  price: number;
}

export interface ComputedDemandValue {
  shortfall: number;
  satisfiedDemand: number;
  demandValue: number;
  demandCost: number;
  profit: number
}

export function getProvince(data: Province): Province {
  let totalProduction = 0;
  const producers: Producer[] = [];
  data.producers.forEach((d) => {
    totalProduction += d.production;
    producers.push(getProducer(data, d));
  });
  return {
    ...data,
    totalProduction,
    producers,
  };
}

export function getDemandValuesFromProvince(data: Province): ComputedDemandValue {
  const { demand, totalProduction, price } = data;
  const shortfall = demand - totalProduction;
  const satisfiedDemand = Math.min(demand, totalProduction);
  const demandValue = satisfiedDemand * price;
  const demandCost = getDemandCost(data);
  const profit = demandValue - demandCost;
  return {
    shortfall,
    satisfiedDemand,
    demandValue,
    demandCost,
    profit,
  };
}

export function getDemandCost(data: Province) {
  const { demand, producers } = data;
  let remainingDemand = demand;
  let result = 0;
  producers
    .sort((a, b) => a.cost - b.cost)
    .forEach((p) => {
      const contribution = Math.min(remainingDemand, p.production);
      remainingDemand -= contribution;
      result += contribution * p.cost;
    });
  return result;
}
