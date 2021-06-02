export interface IState {
  userInfo: {
    name: string;
    age: number;
    group: string;
    address: string;
  },
  simpleInfo: {
    zipcode: number;
    city: string;
    is_shipping_order: boolean;
  }
}