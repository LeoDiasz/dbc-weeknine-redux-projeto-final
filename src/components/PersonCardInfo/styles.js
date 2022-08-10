import styled, {css} from "styled-components"

export const baseStylesCard = css`
  display: grid;
  align-items: center;
  justify-content: space-between;
  height: 92px;
  width: 100%;
  padding: 0 40px;
  gap: 40px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  transition: 0.3s;

  & + &:hover {
    background-color: #f2f2f2;
  }

  h4 {
    font-weight: normal;
    color: var(--color-text-gray-dark)
  }

  > div {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
  }



  @media(max-width: 1080px) {
    justify-content: inherit;
    text-align: center;
    gap: 10px;
    min-height: 120px;
    height: auto;
    padding: 20px 10px;
    font-size: 0.8rem;
    
    button {
        padding: 4px;
        min-height: 25px;
        font-size: 15px;
        width: 30px;
    }

    &:first-child {
      font-size: 1rem;
    }

    & + & {
      grid-template-rows: 1fr auto;
      row-gap: 15px;
    }





  }

  @media(max-width: 576px) {
    & + & {
      word-break: break-word;
    }
  }
`

const PersonContent = styled.li`
  ${baseStylesCard};
  grid-template-columns: 1.5fr 300px repeat(3, 1fr);
  

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
  }

  @media(max-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
    
    div {
      justify-self: center;
      grid-column: 1 / 5;
      
      button:first-child {
        width: 80px;
      }
    }
  }


  @media(max-width: 576px) {
    gap: 25px;
  }
`

export {PersonContent}
