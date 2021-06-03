import React from "react";

export interface IProductCard {
  id: number;
  name: string;
  quantity: number;
}

export interface IState {
  count?: number;
  userInfo: Partial<{
    id: number;
    name: string;
    age: number;
    group: string;
    address: string;
  }>,
  simpleInfo: Partial<{
    zipcode: number;
    city: string;
    items: IProductCard[];
    is_shipping_order: boolean;
  }>
}

export type ActionType = {
  type: string;
  payload: Promise<any> | any;
};

export type MyDataType = {
  store: IState;
  dispatch: (action: ActionType) => void;
  addItems: (data: IProductCard) => void;
  update: (data: any) => void;
}

export interface IProvider {
  children?: React.ReactNode;
  data?: any;
}