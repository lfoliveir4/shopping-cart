import styled from "styled-components";

import colors from "~/styles/colors";
import { device } from "~/styles/responsive";

export const ContainerHeader = styled.header`
  background: ${colors.green};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.cart-open {
    opacity: 0.1;
  }

  @media ${device.laptop} {
    padding: 0 20px;
  }

  img {
    height: 524px;
    width: 366px;
    border-radius: 7px;
  }
`;

export const ExtermityRight = styled.div`
  display: flex;
  outline: none;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${colors.lightwhite};
      font-size: 22px;
      font-weight: 900;
      letter-spacing: 0;
      line-height: 29px;
      margin-left: 20px;
    }
  }
`;

export const ExtermityLeft = styled.div`
  display: flex;
  outline: none;

  div {
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 20px;

    p {
      color: ${colors.white};
      font-size: 14px;
      font-weight: 900;
      letter-spacing: 0;
      line-height: 19px;
      margin-left: 12px;
    }
  }

  img {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

export const ContainerCountItensToCart = styled.div`
  background: ${colors.red};
  border-radius: 30px;
  outline: none;

  position: relative;
  left: 55px;
  bottom: 10px;
  padding: 5px;
  width: 20px;
  height: 20px;

  span {
    color: ${colors.white};
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 19px;
  }
`;
