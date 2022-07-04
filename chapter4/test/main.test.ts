import assert from 'assert';
import { sampleProvinceData } from '../main';
import {
  Province,
  getDemandValuesFromProvince,
  ComputedDemandValue,
  getProvince,
} from '../Province';

describe('province test', function () {
  let asia: Province;
  let demandValues: ComputedDemandValue;
  beforeEach(function () {
    // 각 테스트가 실행되기 이전에 현재 함수를 먼저 실행해줌 => asia, demandValues의 초기화
    // 불변성이 확실하게 제공되는 경우에는 상수로 사용해도됨
    asia = sampleProvinceData();
    demandValues = getDemandValuesFromProvince(asia);
  });

  test('shortfall', function () {
    expect(demandValues.shortfall).toEqual(5);
  });
  test('profit', function () {
    expect(demandValues.profit).toEqual(230);
  });

  test('change production', function () {
    asia.producers[0].production = 20;
    asia = getProvince(asia);
    demandValues = getDemandValuesFromProvince(asia);
    expect(demandValues.shortfall).toEqual(-6);
    expect(demandValues.profit).toEqual(292);
  });

  test('zero demand', function () {
    asia.demand = 0;
    demandValues = getDemandValuesFromProvince(asia);
    expect(demandValues.shortfall).toEqual(-25);
    expect(demandValues.profit).toEqual(0);
  });

  test('negative demand', function () {
    asia.demand = -1;
    demandValues = getDemandValuesFromProvince(asia);
    expect(demandValues.shortfall).toEqual(-26);
    expect(demandValues.profit).toEqual(-10);
  })

});

describe('no producers', function () {
  let noProducers: Province;
  let demandValues: ComputedDemandValue;
  beforeEach(function () {
    const data: Province = {
      name: 'No producers',
      producers: [],
      demand: 30,
      price: 20,
      totalProduction: 0,
    };
    noProducers = getProvince(data);
    demandValues = getDemandValuesFromProvince(data);
  });
  test('shortfall', function () {
    expect(demandValues.shortfall).toEqual(30);
  });
  test('profit', function () {
    expect(demandValues.profit).toEqual(0);
  });
});
