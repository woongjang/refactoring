import { deepEqual } from 'assert';
import _ from 'lodash';
import { enrichReading } from '../enrichReading';

test('check reading unchanged', function () {
  const baseReading = {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017,
  };
  const oracle = _.cloneDeep(baseReading);
  enrichReading(baseReading);
  deepEqual(baseReading, oracle);
})