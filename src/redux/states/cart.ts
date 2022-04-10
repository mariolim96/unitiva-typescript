import { measureItem, measureItems, sunglasses } from "../../types/cart";

export interface IState {
  items: {
    byId: {
      id: number;
      name: string;
      info: string;
      price: number;
      image: string;
    }[];
  };
  measures: measureItems<measureItem>;
  total: number;
}
export const initialState: IState = {
  items: {
    byId: [
      {
        id: 0,
        name: "Ray-Ban Wayfarer",
        info: "RBN82 84 95",
        price: 76,
        image: "1.png",
      },
      {
        id: 1,
        name: "Ray-Ban Round",
        info: "RBN82 56 95",
        price: 90,
        image: "2.png",
      },
      {
        id: 2,
        name: "Ray-Ban Clubmaster",
        info: "RBN82 01 95",
        price: 100,
        image: "3.png",
      },
      {
        id: 3,
        name: "Ray-Ban Aviator",
        info: "RBN82 87 32",
        price: 104,
        image: "4.png",
      },
    ],
  },
  //id of sunglasses with quantity and measures
  measures: {
    1: {
      50: { size: 50, pcs: 5, added: 0 },
      52: { size: 52, pcs: 1, added: 0 },
    },
    2: {
      48: { size: 48, pcs: 1, added: 0 },
      52: { size: 52, pcs: 4, added: 0 },
    },
    3: {
      50: { size: 50, pcs: 1, added: 0 },
      54: { size: 54, pcs: 4, added: 0 },
    },
    0: {
      50: { size: 50, pcs: 7, added: 0 },
      52: { size: 52, pcs: 2, added: 0 },
    },
  },

  total: 0,
};
