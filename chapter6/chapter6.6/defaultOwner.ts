import { Owner } from './types';

let defaultOwnerData: Owner = {
  firstName: '마틴',
  lastName: '파울러',
};
function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}

function setDefaultOwner(arg: Owner) {
  defaultOwnerData = arg;
}

let spaceship: { owner?: Owner } = {};

spaceship.owner = defaultOwner();

setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });
