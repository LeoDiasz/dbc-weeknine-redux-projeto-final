import styled from "styled-components"
import { baseStylesCard } from "../PersonCardInfo/styles"

export const ListAddressContent = styled.li`
  ${baseStylesCard}
  grid-template-columns: 1fr 1.5fr repeat(6, 1fr) 100px;
 

 @media(max-width: 1080px) {
    grid-template-columns: repeat(8, 1fr);
  
    div {
      justify-self: center;
      grid-column: 1 / 9;
    }
  }

  @media(max-width: 780px) {
    grid-template-columns: repeat(6, 1fr);

    h4:nth-child(4), h4:nth-child(5) {
        display: none;
      }
  }

  @media(max-width: 576px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
    text-align: center;
    
    h4:nth-child(8) {
        display: none;
    }
  }

`