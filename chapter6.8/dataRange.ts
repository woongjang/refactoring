import { Station, TemperatureRange } from './types';

class NumberRange {
  _data: TemperatureRange;
  constructor(min: number, max: number) {
    this._data = { min, max };
  }
  contains(arg: number) {
    const { min, max } = this._data;
    return arg >= min && arg <= max;
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}

const station: Station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

function readingsOutsideRange(station: Station, range: NumberRange) {
  const { min, max } = range;
  // 앞서 만든 contains함수를 이용해서 한번 더 감싸 줄 수 있다.
  // return station.readings.filter(r => !range.contains(r.temp));
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

const operatingPlan = {
  temperatureFloor: 0,
  temperatureCeiling: 10,
};
const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

let alerts = readingsOutsideRange(station, range);
