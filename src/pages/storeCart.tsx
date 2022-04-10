import * as React from "react";
import { Header } from "../components";
import { HeaderData } from "../data";
import { Footer } from "../components/";
import { FooterData } from "../data";
import Cart from "../components/cart/cart";
export interface IAppProps {}

export default function StoreCart(props: IAppProps) {
  return (
    <>
      <Header {...HeaderData[1]}></Header>
      <Cart />
      <Footer {...FooterData[1]}></Footer>
    </>
  );
}
