import React from "react";
import {
  CartContainer,
  CartGrid,
  CartItem,
  CartIteminfo,
  CartItemLeftInfo,
  AddIcon,
  RemoveIcon,
  Header4,
  CartItemTitles,
  Header,
  TextWrapper,
} from "./cart.styled";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { cart, totalPrice, totalAddedProducts } from "../../redux/slices/cart";
import { nanoid } from "nanoid";
import { IconArrow } from "./cart.styled";
import { ADD,DELETE } from "../../redux/slices/cart";
import cartCategories from "../../data/cartCategories";
import ButtonContainer from "./buttonContainer";
const Cart = () => {
  const cartItems = useAppSelector(cart);
  const price = useAppSelector(totalPrice);
  const totalProducts = useAppSelector(totalAddedProducts);

  const titles = cartCategories.map((item, i) => {
    return (
      <CartItem key={item}>
        <CartItemTitles>{item}</CartItemTitles>
        {i === 0 || i === 4 ? <IconArrow size={22} /> : ""}
      </CartItem>
    );
  });
  const lastRow = [...Array(5)].map(() => {
    return <CartItem> </CartItem>;
  });
  const cartItemsList = cartItems.map((item, i) => {
    return (
      <>
        <CartItem key={nanoid()} id={String(item.id)}>
          <CartIteminfo>{item.name}</CartIteminfo>
          <ButtonContainer id={item.id} size={item.size} type={DELETE.toString()}>
            <RemoveIcon data-id={i} size={18} />
            <CartItemLeftInfo data-id={i}>Remove</CartItemLeftInfo>
          </ButtonContainer>
        </CartItem>
        <CartItem>
          <CartIteminfo>{item.info}</CartIteminfo>
        </CartItem>
        <CartItem>
          <CartIteminfo>{item.size}</CartIteminfo>
        </CartItem>
        <CartItem>
          <ButtonContainer id={item.id} size={item.size} type={ADD.toString()}>
            <AddIcon size={18} data-id={i} />
            <CartItemLeftInfo blue data-id={i}>
              Add
            </CartItemLeftInfo>
          </ButtonContainer>
          <CartIteminfo>{item.added}</CartIteminfo>
        </CartItem>
        <CartItem>
          {item.price * item.added}
          <CartIteminfo></CartIteminfo>
        </CartItem>
      </>
    );
  });
  useEffect(() => {}, [cartItems]);
  return (
    <CartContainer>
      <Header>Your cart contains:</Header>
      <CartGrid>
        {titles}
        {cartItemsList}
        {lastRow}
      </CartGrid>
      <TextWrapper>
        <Header4>Total pieces:&nbsp;&nbsp;</Header4>
        <Header4 bold>{totalProducts}</Header4>
      </TextWrapper>
      <TextWrapper isClear="right" isPadding="36px">
        <Header4 dGrey>Price:&nbsp;{price}  </Header4>
        <Header4 bold dGrey></Header4>
      </TextWrapper>
    </CartContainer>
  );
};

export default Cart;
export {};
