import styled from "styled-components"

export const LogoContent = styled.img`
  width: ${props => props.isWithText ? "160px" : "60px"};
  transition: filter 0.3s;
  
  &:hover {
    filter: brightness(0.9);
  }

`