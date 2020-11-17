import styled from "styled-components";

import colors from "~/styles/colors";

export const Container = styled.div`
  background: ${colors.white};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 220px;
    width: 220px;
  }
`;
