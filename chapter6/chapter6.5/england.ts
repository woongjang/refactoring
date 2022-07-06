// 리팩토링 전
function baseInNewEngland(aCustomer: any) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const someCustomers = [{
  address: { state : 'MA' }
}]

const newEnglanders = someCustomers.filter(c => baseInNewEngland(c));

// 리팩토링 후
function refacInNewEngland(stateCode: string) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const refacNewEnglanders = someCustomers.filter((c) => 
  refacInNewEngland(c.address.state)
);