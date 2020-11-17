import React, {
  useCallback,
  useState,
  useEffect,
  createContext,
  useMemo,
} from "react";

import { SetStorage, GetStorage } from "~/utils/storage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function loadProducts() {
      const storagedProducts = GetStorage("@shoppingcart:products");

      if (storagedProducts) {
        setProducts([...storagedProducts]);
      } else {
        setProducts([]);
        SetStorage("@shoppingcart:products", products);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    (product) => {
      const dataCart = GetStorage("@shoppingcart:products");

      product["quantity"] = 1;

      if (dataCart.length === 0 || !dataCart.find((p) => p.id === product.id)) {
        dataCart.push(product);
      } else if (dataCart.find((p) => p.id === product.id)) {
        product["quantity"] += dataCart.find(
          (p) => p.id === product.id
        ).quantity;

        dataCart.splice(
          dataCart.findIndex((p) => p.id === product.id),
          1,
          product
        );
      }

      SetStorage("@shoppingcart:products", dataCart);
      setProducts(dataCart);
    },
    [products]
  );

  const increment = useCallback(
    async (id) => {
      const dataCart = GetStorage("@shoppingcart:products");

      const product = dataCart.find((p) => p.id === id);
      product.quantity += 1;

      dataCart.splice(
        dataCart.findIndex((p) => p.id === id),
        1,
        product
      );

      SetStorage("@shoppingcart:products", dataCart);
      setProducts(dataCart);
    },

    [products]
  );

  const decrement = useCallback(async (id) => {
    const dataCart = GetStorage("@shoppingcart:products");
    const product = dataCart.find((p) => p.id === id);

    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      product.quantity = 1;
    }

    dataCart.splice(
      dataCart.findIndex((p) => p.id === id),
      1,
      product
    );

    SetStorage("@shoppingcart:products", dataCart);
    setProducts(dataCart);
  });

  const remove = useCallback(
    (id) => {
      const dataCart = GetStorage("@shoppingcart:products");

      dataCart.splice(
        dataCart.findIndex((p) => p.id === id),
        1
      );

      SetStorage("@shoppingcart:products", dataCart);
      setProducts(dataCart);
    },
    [products]
  );

  const value = useMemo(
    () => ({ addToCart, increment, decrement, remove, products }),
    [products, addToCart, increment, decrement, remove]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
