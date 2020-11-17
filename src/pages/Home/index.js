import React, { useState, useEffect, useContext, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useMedia } from "use-media";

import { CartContext } from "~/context/cart";

import CardItem from "~/components/CardItem";
import Header from "~/components/Header";
import CepInputText from "~/components/Input/Mask";
import Loading from "~/components/Loading";

import api from "~/services/api";

import formatValue from "~/utils/formatValue";

import colors from "~/styles/colors";

import {
  CloseModal,
  Container,
  ContainerBottomCart,
  ContainerButtonGoToCart,
  ContainerCalculateZipCode,
  ContainerButtonsAddItemToCart,
  ContainerCart,
  ContainerContentCart,
  ContainerDetailProductOnCart,
  ContainerFreight,
  ContainerSubTotal,
  ContainerTotal,
  ContentCart,
  HeaderCart,
} from "./styles";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [productsFromApi, setProductsFromApi] = useState([]);
  const [freight, setFreight] = useState({});
  const { products, increment, decrement, remove } = useContext(CartContext);

  const mobile = useMedia({ maxWidth: "1280px" });

  function openCart(e) {
    e.preventDefault();
    setOpen(true);
  }

  function closeCart(e) {
    e.preventDefault();
    setOpen(false);
  }

  function handleIncrement(id) {
    increment(id);
  }

  function handleDecrement(id) {
    decrement(id);
  }

  function handleRemove(id) {
    remove(id);
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("products");

      setProductsFromApi(response.data);
    }

    loadProducts();
  }, []);

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubtotal = product.price.to.integers * product.quantity;

      return accumulator + productsSubtotal;
    }, 0);

    return total;
  }, [products]);

  if (productsFromApi.length) {
    return (
      <Container>
        <Header
          className={`${open ? "cart-open" : ""} ${mobile ? "mobile" : ""}`}
          onClick={open ? closeCart : openCart}
        />

        <CardItem
          className={`${open ? "cart-open" : ""} ${mobile ? "mobile" : ""}`}
          products={productsFromApi}
        />

        <ContainerCart
          className={`${open ? "cart-open" : ""} ${mobile ? "mobile" : ""}`}
        >
          <HeaderCart>
            <CloseModal className={mobile ? "mobile" : ""} onClick={closeCart}>
              <div>
                <AiOutlineClose size={26} color={colors.green} />
              </div>
            </CloseModal>
            {mobile ? <h3>Produtos no carrinho</h3> : <h3>Meus Produtos</h3>}
          </HeaderCart>

          <ContainerCalculateZipCode>
            <h3>Calcular Frete: </h3>

            <div>
              <CepInputText
                style={{ fontSize: 12 }}
                onSuccess={(result) => setFreight(result)}
              />
            </div>
          </ContainerCalculateZipCode>

          <ContainerContentCart>
            {products.map((product) => (
              <ContentCart key={product.id}>
                <div>
                  <img src={product.picture} alt={product.name} />

                  <ContainerDetailProductOnCart>
                    <p>{product.name}</p>

                    <span>Cód. {product.id}</span>

                    <ContainerButtonsAddItemToCart>
                      <button onClick={() => handleDecrement(product.id)}>
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleIncrement(product.id)}>
                        +
                      </button>
                    </ContainerButtonsAddItemToCart>

                    <button onClick={() => handleRemove(product.id)}>
                      Excluir
                    </button>
                  </ContainerDetailProductOnCart>
                </div>
              </ContentCart>
            ))}
          </ContainerContentCart>

          <ContainerBottomCart>
            <ContainerFreight>
              <p>Frete</p>

              <span>{formatValue(freight.freight || 0)}</span>
            </ContainerFreight>

            <ContainerSubTotal>
              <p>Subtotal</p>

              <span>{formatValue(cartTotal)}</span>
            </ContainerSubTotal>

            <ContainerTotal>
              <p>Total</p>

              <span>
                {formatValue(cartTotal + (parseInt(freight.freight) || 0))}
              </span>
            </ContainerTotal>

            <ContainerButtonGoToCart>
              <button>{mobile ? "Ir para Carrinho" : "Comprar"}</button>
            </ContainerButtonGoToCart>
          </ContainerBottomCart>
        </ContainerCart>
      </Container>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
