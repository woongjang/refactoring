import { Owner } from './types';
let defaultOwnerData = {
  firstName: '마틴',
  lastName: '파울러',
};

export function defaultOwner() {
  return new Person(defaultOwnerData);
}

export function setDefaultOwner(arg: Owner) {
  defaultOwnerData = arg;
}

class Person {
  _lastName: string;
  _firstName: string;
  constructor(data: Owner) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}
