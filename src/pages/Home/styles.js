import styled from "styled-components";

import { device } from "~/styles/responsive";
import colors from "~/styles/colors";

export const Container = styled.div`
  width: 100%;
`;

export const ContainerCart = styled.div`
  background: ${colors.white};
  position: fixed;
  top: 0;
  right: -32%;
  width: 32%;
  height: 0;
  opacity: 0;
  transition: 0.5s ease right, 0s ease width;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${colors.whitedarken};

  &.cart-open {
    height: 100vh;
    display: flex;
  }

  &:not(.mobile) {
    display: none;
  }

  &.mobile {
    position: fixed;
    top: initial;
    right: 0;
    bottom: -100%;
    width: 100%;
    transition: 0.5s ease bottom;
    z-index: 9999;

    &.cart-open {
      bottom: 0;
      opacity: 1;
    }
  }

  &.cart-open:not(.mobile) {
    right: 0;
    opacity: 1;
    display: flex;
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;

  background: ${colors.white};
  height: 50px;
  padding: 15px 0px 15px 15px;
  cursor: pointer;

  h3 {
    color: ${colors.graydarken};
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 17px;
    text-align: center;

    @media (min-width: 1281px) {
      margin-left: 20px;
    }
  }
`;

export const ContainerContentCart = styled.div`
  margin-bottom: auto;
  overflow-y: auto;
`;

export const ContentCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${colors.whitedarken};

  div {
    display: flex;
    width: 100%;

    img {
      height: 100px;
      width: 100px;
      margin-right: 7px;
      border-radius: 10px;
    }
  }

  @media (min-width: 1281px) {
    flex-direction: column;
  }
`;

export const ContainerDetailProductOnCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;

  p {
    color: ${colors.green};
    font-size: 13px;
    margin-bottom: 5px;

    @media ${device.tablet} {
      font-size: 16px;
    }
  }

  span {
    color: ${colors.graylight};
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  button {
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.green};
    color: ${colors.green};
    background: transparent;
    outline: none;
    padding: 7px 0;
  }
`;

export const CloseModal = styled.div`
  height: 54px;
  width: 50px;
  border-radius: 10px 0 0 10px;
  background-color: ${colors.white};
  position: absolute;
  cursor: pointer;
  left: -121px;
  top: 130px;
  border: 1px solid ${colors.whitedarken};

  &.mobile {
    top: 0;
    left: initial;
    right: 0;
    position: relative;
    border: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  p {
    color: ${colors.lightwhite};
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 29px;
    margin: 0 10px;
  }

  @media (min-width: 1280px) {
    width: 121px;
  }
`;

export const ContainerBottomCart = styled.div`
  position: relative;
  bottom: 0;
`;

export const ContainerFreight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 30px;
  border: 1px solid ${colors.whitedarken};

  p {
    color: ${colors.grayespacial};
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 18px;
    }
  }

  span {
    color: ${colors.grayespacial};
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 18px;
    }
  }
`;

export const ContainerSubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 30px;
  border-bottom: 1px solid ${colors.whitedarken};

  p {
    color: ${colors.grayespacial};
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 18px;
    }
  }

  span {
    color: ${colors.grayespacial};
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 18px;
    }
  }
`;

export const ContainerTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 30px;
  border-bottom: 1px dashed ${colors.whitedarken};

  p {
    color: ${colors.grayespacial};
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 18px;
    }
  }

  span {
    color: ${colors.grayespacial};
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 18px;
    }
  }
`;

export const ContainerButtonGoToCart = styled.div`
  padding: 5px 20px;

  button {
    width: 100%;
    background: ${colors.green};
    color: ${colors.white};
    border: 0;
    padding: 7px 0;
    border-radius: 30px;

    @media ${device.tablet} {
      border-radius: 0;
      font-size: 18px;
      padding: 12px 0;
    }
  }

  @media ${device.tablet} {
    padding: 0;
  }
`;

export const ContainerCalculateZipCode = styled.div`
  background: ${colors.white};
  padding: 5px 0px 15px 5px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${colors.whitedarken};

  h3 {
    color: ${colors.graydarken};
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 17px;
    text-align: center;
    display: none;

    @media (min-width: 1281px) {
      display: initial;
      margin-left: 30px;
    }
  }

  div {
    display: flex;

    @media (max-width: 1281px) {
      width: 100%;
    }
  }

  input {
    width: 100%;
    margin: 0 10px;
    border: 1px solid ${colors.whitedarken};
    border-radius: 20px;
    padding: 7px 10px;
    outline: none;

    @media (min-width: 1281px) {
      border: 1px solid ${colors.whitedarken};
      border-radius: 2px;
    }
  }

  @media (min-width: 1281px) {
    justify-content: space-between;
  }
`;

export const ContainerButtonsAddItemToCart = styled.div`
  border: 1px solid ${colors.whitedarken};
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.green};
    color: ${colors.green};
    background: transparent;
    outline: none;
  }
`;
