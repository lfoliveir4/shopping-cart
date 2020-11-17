import "../../../__mocks__/canvas";
import "../../../__mocks__/matchMedia";
import React from "react";
import { render, waitFor } from "@testing-library/react";
import AxiosMock from "axios-mock-adapter";

import AppProvider from "../../context";

import Home from "../../pages/Home";

import api from "../../services/api";

const apiMock = new AxiosMock(api);

describe("Home", () => {
  it("should be able to list products", async () => {
    apiMock.onGet("products").reply(200, [
      {
        id: 1,
        installments: null,
        name: "Ferro de passar 110V",
        picture:
          "https://www.extra-imagens.com.br/html/conteudo-produto/73/2633/images/Ferro-a-Seco-Black&Decker-VFA.png",
        offer: {
          type: "offer",
          label: "Oferta",
          value: 26,
        },
        price: {
          to: {
            integers: "1.699",
            decimals: "00",
          },
          from: {
            integers: "2.319",
            decimals: "00",
          },
        },
        tag: {
          type: "exclusive",
          label: "Exclusivo on-line",
        },
        unit: "cada",
      },
      {
        id: 2,
        installments: null,
        name: "Frigideira de Ferro",
        picture:
          "https://1965.cdn.simplo7.net/static/1965/sku/frigideira-de-ferro-fundido-panela-de-ferro-para-cooktop-de-inducao-frigideira-de-ferro-cabo-de-ferro-29-cm-diametro-assadeira-de-ferro-1518106544409.jpg",
        price: {
          to: {
            integers: "64",
            decimals: "90",
          },
          from: null,
        },
        offer: null,
        tag: null,
        unit: "cada",
      },
    ]);

    const { getByText } = render(
      <AppProvider>
        <Home />
      </AppProvider>
    );

    waitFor(
      () =>
        expect(
          getByText("Varal de Parede Polipropileno 7,5x38x7,5cm Secalux")
        ).toBeTruthy(),
      {
        timeout: 200,
      }
    );
  });
});
