import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useMedia } from "use-media";

import { CartContext } from "~/context/cart";

import { settingsToast } from "~/utils/toast";

import {
  Container,
  BoxCard,
  ContainerImgProduct,
  ContainerTagExclusivity,
  ContainerProductOffer,
  ContainerTitleProduct,
  ButtonAddItemToCart,
  ContainerPrice,
  TextPrice,
  Footer,
} from "./styles";

const CardItem = ({ products, className }) => {
  const { addToCart } = useContext(CartContext);
  const mobile = useMedia({ maxWidth: "768px" });

  function handleAddToCart(item) {
    addToCart(item);

    mobile &&
      toast.success(
        "Produto adicionado ao carrinho com sucesso!",
        settingsToast
      );
  }

  return (
    <Container className={className}>
      {products.map((product) => (
        <BoxCard key={product.id}>
          <div>
            <ContainerImgProduct>
              {product.tag && (
                <ContainerTagExclusivity>
                  <p>{product.tag.label}</p>
                </ContainerTagExclusivity>
              )}

              <img src={product.picture} alt={product.name} />

              {product.offer && (
                <ContainerProductOffer>
                  <p>{product.offer.label.toUpperCase()}</p>
                  <p>-{product.offer.value}%</p>
                </ContainerProductOffer>
              )}
            </ContainerImgProduct>
            <ContainerTitleProduct>
              <p>{product.name}</p>
            </ContainerTitleProduct>
          </div>

          <div style={product.price.from && { background: "#FAE800" }}>
            <ButtonAddItemToCart
              data-testid={`add-to-cart-${product}`}
              onClick={() => handleAddToCart(product)}
            >
              Adicionar ao Carrinho
            </ButtonAddItemToCart>

            <ContainerPrice>
              <TextPrice offer={!!product.price.from}>
                R${" "}
                {parseInt(product.price.to.integers.replace(/,/g, ",")).toFixed(
                  2
                )}{" "}
                {product.unit}
              </TextPrice>

              {product.price && product.price.from && (
                <s>
                  R${" "}
                  {parseInt(
                    product.price.from.integers.replace(/,/g, ",")
                  ).toFixed(2)}{" "}
                  {product.unit}
                </s>
              )}

              {product.installments && (
                <div>
                  <strong>{product.installments.amount}x</strong>{" "}
                  <span>de</span> <strong>{product.installments.value}</strong>{" "}
                  <span>s/ juros</span>
                </div>
              )}
            </ContainerPrice>
            <Footer visible={!!product.price.from} />
          </div>
        </BoxCard>
      ))}
    </Container>
  );
};

export default React.memo(CardItem);
