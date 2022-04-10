export interface sunglasses {
  name: string;
  info: string;
  price: number;
  image: string;
}
type MyGroupType = {
  [key: string]: sunglasses;
};

// interface for measures
export interface measure {
  size: number;
  pcs: number;
  added: number;
}
export type measureItem = {
  [key: number]: {
    size: number;
    pcs: number;
    added: number;
  };
};
export type measureItems<T> = {
  [key: number]: T;
};

export interface AddAction {
  id: number;
  size: number;
}
export type Action = AddAction | any;
