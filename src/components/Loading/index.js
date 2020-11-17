import React from "react";
import Lottie from "lottie-react-web";

import loadingData from "~/assets/animation/load.json";

import { Container } from "./styles";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => (
  <Container>
    <Lottie
      speed={0.5}
      width={100}
      height={100}
      options={defaultOptions}
      isStopped={false}
      isPaused={false}
    />
  </Container>
);

export default Loading;
