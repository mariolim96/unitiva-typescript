import React from "react";
import { Header } from "../components/header/header";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";
import { ContainerCard } from "../components/cardCollection/cardCollection.styed";
import { useSelector } from "react-redux";
import { getItem } from "../redux/slices/cart";
import { nanoid } from "nanoid";
import { HeaderData } from "../data";
import { FooterData } from "../data";
export interface IAppProps {}

export function StoreProducts(props: IAppProps) {
  const items = useSelector(getItem);
  const itemCollection = Object.keys(items.byId).map((item) => {
    return <Card {...items.byId[Number(item)]} />;
  });
  return (
    <>
      <Header {...HeaderData[0]} />
      <ContainerCard>{itemCollection}</ContainerCard>
      <Footer {...FooterData[0]} />
    </>
  );
}
