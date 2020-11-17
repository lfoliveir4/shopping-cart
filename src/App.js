import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./routes";

import AppProvider from "./context";

import GlobalStyles from "./styles/global";

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  </AppProvider>
);

export default hot(App);
