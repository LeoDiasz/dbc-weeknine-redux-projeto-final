import styled from "styled-components"

export const ContainerForFormAndLists = styled.section`
  display: ${props => props.display && props.display};
  flex-direction: ${props => props.direction && props.direction};
  align-items: ${props => props.alignItems && props.alignItems};
  justify-content: ${props => props.justifyContent && props.justifyContent};
  gap: ${props => props.gap && props.gap};
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height && props.height}; 
  padding: ${props => (props.padding ? props.padding : "70px 40px")};
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  min-width: 300px;

  
`