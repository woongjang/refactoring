export interface Station {
  name: string;
  readings: Reading[];
}

export interface Reading {
  temp: number;
  time: string;
}

export interface TemperatureRange {
  min: number;
  max: number;
}