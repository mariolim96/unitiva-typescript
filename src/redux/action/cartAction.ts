import _ from "lodash";
import { ADD, DELETE, CLEAR } from "../slices/cart";
export const operationHandler = (type: string, id: number, size: number) => {
  const payload = {
    id: id,
    size: size,
  };
  return {
    type: type,
    payload: {
      id,
      size,
    },
  };

  // switch (type) {
  //   case ADD.toString():
  //     return ADD(payload);

  //   case DELETE.toString():
  //     return DELETE(payload);
  // }
};

export const clearItemCart = (measures: any) => {
  const clearMeasures = _.forEach(measures, (item) => {
    _.forEach(item, (size) => {
      size.added = 0;
    });
  });
  CLEAR(clearMeasures);
};
