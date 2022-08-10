import styled from "styled-components"
import {baseStylesCard} from "../PersonCardInfo/styles"

export const ListContactsContainer = styled.li`
  ${baseStylesCard}
  grid-template-columns: repeat(3, 1fr) 100px;
  text-align: left;


  @media(max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);

    &:first-child {
      font-size: 1rem;
    }
    
    div {
      justify-self: center;
      grid-column: 1 / 4;

    }
    
  }
`