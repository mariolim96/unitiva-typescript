import React, { useEffect } from "react";
import {
  StyledCard,
  Photo,
  Button,
  Title,
  Info,
  Price,
  Border,
  BlueCircle,
  RedCircle,
  Select,
} from "./card.styled";
import { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { operationHandler } from "../../redux/action/cartAction";
import {
  getMeasures,
  getAddedMeasures,
  getPcsMeasures,
} from "../../redux/slices/cart";
import { ADD } from "../../redux/slices/cart";
interface cardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  info: string;
}
function Card({ id, name, info, price, image }: cardProps) {
  const measures: any = useAppSelector(getMeasures);
  const [val, setVal] = useState(-1);
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(getPcsMeasures(id));
  const added = useAppSelector(getAddedMeasures(id));
  useEffect(() => {}, [quantity, added, measures]);
  const add = useCallback(() => {
    if (val !== -1) {
      dispatch(operationHandler(ADD.toString(), id, val));
    }
  }, [dispatch, id, val]);
 const measure = Object.keys(measures[id]).map((item) => 
      <>
        <option
          key={item}
          value={item}
          disabled={measures[id][item].pcs <= 0 ? true : false}
        >
          {item}({measures[id][item].pcs}pcs)
        </option>
      </>
    );
  return (
    <StyledCard>
      {added > 0 ? <BlueCircle>{added}</BlueCircle> : ""}
      {quantity === 1 ? <RedCircle>LAST</RedCircle> : ""}
      <Photo src={process.env.PUBLIC_URL + image} />
      <Border />
      <Title>{name}</Title>
      <Info>{info}</Info>
      <Price>Qty: {quantity}</Price>
      {quantity === 1 ? (
        <Price red tiny>
          last item
        </Price>
      ) : quantity <= 3 ? (
        <Price red tiny>
          last pieces available
        </Price>
      ) : (
        ""
      )}
      <br />
      <Price>Price: </Price>
      <Price bold>${price}</Price>
      <br></br>
      <div>
        {quantity > 0 ? (
          <Select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              let vall = e.target.value;
              setVal(Number(vall));
            }}
          >
            <option value={-1} className="base">
              Size
            </option>
            {measure}
          </Select>
        ) : (
          ""
        )}
        <Button
          disabled={val < 0 || measures[id][val].pcs < 1}
          onClick={() => {
            add();
          }}
        >
          {quantity > 0 ? "Add" : "Added all"}
        </Button>
      </div>
    </StyledCard>
  );
}

export default Card;
