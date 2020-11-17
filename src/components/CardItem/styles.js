import styled from "styled-components";

import colors from "~/styles/colors";

export const Container = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 2fr));
  grid-template-rows: auto;
  grid-row-gap: 40px;
  opacity: 1;
  transition: all 0.2s ease-in-out;

  &.cart-open {
    opacity: 0.1;
  }
`;

export const BoxCard = styled.div`
  width: 100%;
  margin: 30px 0;
  max-width: 210px;
  border: 1pt solid ${colors.whitedarken};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    -webkit-box-shadow: -1px -1px 17px -4px ${colors.shadow};
    -moz-box-shadow: -1px -1px 17px -4px ${colors.shadow};
    box-shadow: -1px -1px 17px -4px ${colors.shadow};
  }
`;

export const ContainerImgProduct = styled.div`
  width: 100%;
  max-width: 210px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 172px;
    height: 172px;
    object-fit: cover;
  }
`;

export const ContainerTitleProduct = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0 7px;

  p {
    font-size: 1.1rem;
  }
`;

export const ButtonAddItemToCart = styled.button`
  margin: 20px 0;
  background: ${colors.green};
  color: ${colors.white};
  width: 100%;
  border-radius: 20px;
  border: 0;
  height: 36px;
  outline: none;
`;

export const ContainerPrice = styled.div`
  height: 71pt;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;

  s {
    padding: 0 7px;
    color: ${colors.graydarken};
  }

  strong {
    color: ${colors.graydarken};
    font-weight: bold;

    &:first-child {
      margin-left: 7px;
    }
  }

  span {
    color: ${colors.graydarken};
  }
`;

export const Footer = styled.div`
  height: 5pt;
  background: ${colors.green};
  opacity: ${(props) => (props.visible ? 0 : 1)};
`;

export const TextPrice = styled.p`
  padding: 0 7px;
  font-size: 17pt;
  color: ${(props) => (props.offer ? colors.red : colors.transparent)};
  font-weight: bold;
`;

export const ContainerProductOffer = styled.div`
  background: ${colors.red};
  position: absolute;
  bottom: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;

  p {
    font-size: 1.1rem; // 1.1rem || 18px === 14pt
    color: ${colors.yellowdarken};
  }
`;

export const ContainerTagExclusivity = styled.div`
  background: ${colors.green};
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 7px 10px;
  left: 100px;

  p {
    font-size: 18px;
    color: ${colors.white};
  }
`;
