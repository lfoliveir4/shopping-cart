import "../../../__mocks__/canvas";
import React, { useContext } from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { localStorageMock } from "../../../__mocks__/localStorage";
import { CartProvider, CartContext } from "../../context/cart";

const TestComponent = () => {
  const { addToCart, increment, decrement, remove, products } = useContext(
    CartContext
  );

  function handleAddToCart() {
    addToCart({
      id: "1234",
      title: "Test product",
      image_url: "test",
      price: 1000,
      quantity: 0,
    });
  }

  function handleIncrement() {
    increment("1234");
  }

  function handleDecrement() {
    decrement("1234");
  }

  function handleRemove() {
    remove("1234");
  }

  return (
    <>
      <button data-testid="add-to-cart" onClick={handleAddToCart}>
        Add To Cart
      </button>

      <button data-testid="increment" onClick={handleIncrement}>
        Increment
      </button>

      <button data-testid="decrement" onClick={handleDecrement}>
        Decrement
      </button>

      <button data-testid="remove-to-cart" onClick={handleRemove}>
        Remove From Cart
      </button>

      {products.map((product) => (
        <ul key={product.id}>
          <li>{product.name}</li>
          <li>{product.quantity}</li>
        </ul>
      ))}
    </>
  );
};

describe("Cart Context", () => {
  beforeEach(() => localStorageMock.clear());

  it("should be to initialize localstorage ", () =>
    expect(localStorageMock.store).toEqual(undefined));

  it("should be to localstorage return undefined if requested and item don't exists", () => {
    const storage = localStorageMock.getItem("@shoppingcart:productsfake");

    expect(storage).toBeNull();
  });

  it("should be able to add products to the cart", async () => {
    const { getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      fireEvent.click(getByTestId("add-to-cart"));
    });

    await expect(
      localStorageMock.setItem(
        "@shoppingcart:productsfake",
        JSON.stringify({
          id: "1234",
          title: "Test product",
          image_url: "test",
          price: 1000,
          quantity: 1,
        })
      )
    ).toEqual(undefined);

    const storage = localStorageMock.getItem("@shoppingcart:productsfake");

    expect(storage).toEqual(
      JSON.stringify({
        id: "1234",
        title: "Test product",
        image_url: "test",
        price: 1000,
        quantity: 1,
      })
    );
  });

  it("should be able to increment product to the cart", async () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      fireEvent.click(getByTestId("add-to-cart"));
    });

    await expect(
      localStorageMock.setItem(
        "@shoppingcart:productsfake",
        JSON.stringify({
          id: "1234",
          title: "Test product",
          image_url: "test",
          price: 1000,
          quantity: 1,
        })
      )
    ).toEqual(undefined);

    const storage = localStorageMock.getItem("@shoppingcart:productsfake");

    expect(storage).toEqual(
      JSON.stringify({
        id: "1234",
        title: "Test product",
        image_url: "test",
        price: 1000,
        quantity: 1,
      })
    );

    await act(async () => {
      fireEvent.click(getByTestId("increment"));
    });

    expect(getByText("2")).toBeTruthy();
  });

  it("should be able to decrement product to the cart", async () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      fireEvent.click(getByTestId("add-to-cart"));
    });

    await expect(
      localStorageMock.setItem(
        "@shoppingcart:productsfake",
        JSON.stringify({
          id: "1234",
          title: "Test product",
          image_url: "test",
          price: 1000,
          quantity: 1,
        })
      )
    ).toEqual(undefined);

    const storage = localStorageMock.getItem("@shoppingcart:productsfake");

    expect(storage).toEqual(
      JSON.stringify({
        id: "1234",
        title: "Test product",
        image_url: "test",
        price: 1000,
        quantity: 1,
      })
    );

    await act(async () => {
      fireEvent.click(getByTestId("increment"));
    });

    await expect(
      localStorageMock.setItem(
        "@shoppingcart:productsfake",
        JSON.stringify({
          id: "1234",
          title: "Test product",
          image_url: "test",
          price: 1000,
          quantity: 2,
        })
      )
    ).toEqual(undefined);

    const storageProduct = localStorageMock.getItem(
      "@shoppingcart:productsfake"
    );

    expect(storageProduct).toEqual(
      JSON.stringify({
        id: "1234",
        title: "Test product",
        image_url: "test",
        price: 1000,
        quantity: 2,
      })
    );

    await act(async () => {
      fireEvent.click(getByTestId("decrement"));
    });

    await expect(getByText("1")).toBeTruthy();
  });

  it("should be to localstorage return undefined if requested and item don't exists", () => {
    const storage = localStorageMock.getItem("@shoppingcart:productsfake");

    expect(storage).toBeNull();
  });

  it("should be able to remove products to the cart", async () => {
    const { getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await act(async () => {
      fireEvent.click(getByTestId("add-to-cart"));
    });

    await expect(
      localStorageMock.setItem(
        "@shoppingcart:productsfake",
        JSON.stringify({
          id: "1234",
          title: "Test product",
          image_url: "test",
          price: 1000,
          quantity: 1,
        })
      )
    ).toEqual(undefined);

    const storage = localStorageMock.getItem("@shoppingcart:productsfake");

    expect(storage).toEqual(
      JSON.stringify({
        id: "1234",
        title: "Test product",
        image_url: "test",
        price: 1000,
        quantity: 1,
      })
    );

    await act(async () => {
      fireEvent.click(getByTestId("remove-to-cart"));
    });

    await expect(
      localStorageMock.setItem("@shoppingcart:productsfake", JSON.stringify({}))
    ).toEqual(undefined);
  });
});
