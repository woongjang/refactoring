import assert from 'assert';
import { sampleProvinceData } from '../main';
import { Province, getDemandValuesFromProvince } from '../Province';

describe('province test', function() {
  test('shortfall', function() {
    const asia = sampleProvinceData();
    const demandValues = getDemandValuesFromProvince(asia)
    expect(demandValues.shortfall).toBe(5);
  })
})