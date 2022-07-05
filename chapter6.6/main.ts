// 변수 캡슐화 하기
// 리팩토링 전
let baseDefaultOwner = {
  firstName: 'martin',
  lastName: 'fowler',
};

// 리팩토링 후
let defaultOwnerData = {
  firstName: 'martin',
  lastName: 'fowler',
};
export function refacDefaultOwner() {
  return defaultOwnerData;
}

export function setDefaultOwner(arg: typeof defaultOwnerData) {
  defaultOwnerData = arg;
}
