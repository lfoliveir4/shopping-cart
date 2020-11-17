import React, { useContext, useMemo } from "react";

import { CartContext } from "~/context/cart";

import cart from "~/assets/images/cart.svg";

import {
  ContainerHeader,
  ExtermityRight,
  ExtermityLeft,
  ContainerCountItensToCart,
} from "./styles";

const Header = ({ className, onClick }) => {
  const { products } = useContext(CartContext);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [products]);

  return (
    <ContainerHeader className={className}>
      <ExtermityRight>
        <div
          role="button"
          tabIndex="0"
          style={{ cursor: "pointer" }}
          onClick={() => {}}
        >
          <span> Os melhores produtos </span>
        </div>
      </ExtermityRight>

      <ExtermityLeft>
        <div onClick={onClick}>
          <ContainerCountItensToCart>
            <span>{totalItensInCart}</span>
          </ContainerCountItensToCart>
          <img alt="Carrinho: Ver Carrinho" src={cart} />
        </div>
      </ExtermityLeft>
    </ContainerHeader>
  );
};

export default Header;
