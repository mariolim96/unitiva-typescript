import React, { useEffect } from "react";
import {
  Break,
  Nav,
  Container1,
  Logo,
  LeftHeader,
  RightHeader,
} from "./header.style";
import { useAppSelector } from "../../hooks";
import { totalAddedProducts, totalProducts } from "../../redux/slices/cart";

export interface IAppProps {
  leftText: string;
  rightText: string;
  logoText: string;
  productsType: string;
}

export function Header(props: IAppProps) {
  const { leftText, rightText, logoText, productsType } = props;
  const products = useAppSelector(
    productsType === "0" ? totalProducts : totalAddedProducts
  );
  useEffect(() => {}, [products]);
  return (
    <Container1>
      <Logo>{logoText}</Logo>
      <Nav>
        <LeftHeader>{leftText}</LeftHeader>
        <RightHeader>
          {products} &nbsp;
          {rightText}
        </RightHeader>
      </Nav>
      <Break />
    </Container1>
  );
}
