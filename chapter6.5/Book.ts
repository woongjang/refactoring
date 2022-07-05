// 매개변수 추가
class Book {
  _reservations: any[] = [];
  addReservation(customer: any) {
    this.zz_addReservation(customer, false);
  }
  
  zz_addReservation(customer: any, isPriority: boolean) {
    console.assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}