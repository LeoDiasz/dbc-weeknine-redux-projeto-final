import styled from "styled-components"

export const HeaderPages = styled.header`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
  align-items: center;
`