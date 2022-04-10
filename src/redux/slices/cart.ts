import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import _ from "lodash";
import { initialState, IState } from "../states/cart";
import { Action } from "../../types/cart";

// Define the initial state using that type

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD: (state: IState, action: PayloadAction<Action>) => {
      state.total += state.items.byId[action.payload.id].price;
      state.measures[action.payload.id][action.payload.size].added += 1;
      state.measures[action.payload.id][action.payload.size].pcs--;
    },
    DELETE: (state: IState, action: PayloadAction<Action>) => {
      state.total -= state.items.byId[action.payload.id].price;
      state.measures[action.payload.id][action.payload.size].added -= 1;
      state.measures[action.payload.id][action.payload.size].pcs++;
    },

    CLEAR: (state: IState, action: PayloadAction<Action>) => {
      state.total = 0;
      state.measures = action.payload;
    },
  },
});

export const { ADD, DELETE, CLEAR } = cartSlice.actions;

export const cart = (state: RootState) => {
  const res = _.map(state.cart.items.byId, (item, i) =>
    _.map(state.cart.measures[i], (id) => Object.assign({}, item, id)).flat()
  );
  return res.flat().filter((item) => item.added > 0);
};
export const getCartTotal = (state: RootState) => state.cart.total;
export const getItem = (state: RootState) => state.cart.items;

export const getMeasures = (state: RootState) => state.cart.measures;
export const getAvailablePcs =
  (id: number, size: number) => (state: RootState) =>
    state.cart.measures[id][size].pcs;
export const getPcsMeasures = (id: number) => (state: RootState) =>
  _.map(state.cart.measures[id], (measure) => measure.pcs).reduce(
    (a, b) => a + b
  );
export const getAddedMeasures = (id: number) => (state: RootState) =>
  _.map(state.cart.measures[id], (measure) => measure.added).reduce(
    (a, b) => a + b
  );
export const totalProducts = (state: RootState) =>
  _.map(state.cart.items.byId).length;

export const totalAddedProducts = (state: RootState) => {
  const res = _.map(state.cart.measures, (measures: any) => {
    return _.map(measures, (measure: any) => {
      return measure.added;
    }).reduce((a: number, b: number) => a + b);
  });
  return res.reduce((a: number, b: number) => a + b);
};

export const totalProductTypeAdded = (state: RootState) => {
  let itemsIds: number[] = [];
  Object.keys(state.cart.measures).forEach((id) => {
    Object.keys(state.cart.measures[Number(id)]).forEach((size) => {
      return state.cart.measures[Number(id)][Number(size)].added > 0
        ? itemsIds.findIndex((item: number) => item === Number(id)) < 0
          ? itemsIds.push(Number(id))
          : null
        : null;
    });
  });
  return itemsIds.length;
};

export const totalPrice = (state:RootState) => {
  const res = _.map(state.cart.items.byId, (item, i) =>
    _.map(state.cart.measures[i], (id) => Object.assign({}, item, id)).flat()
  )
    .flat()
    .map((item) => item.price * item.added)
    .reduce((a, b) => a + b);
  return res;
};

export default cartSlice.reducer;
