import styled, {css} from "styled-components"

const DivContainer = styled.div `
  display: grid;
  grid-template-columns: 45% 55%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;

    > div:first-child {
      display: none;
    }
  }

  @media (max-width: 576px) {

    > section > section {
      width: 340px;
    }
  }

`

const baseStylesContainers = css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

const DivBanner = styled.div`
  ${baseStylesContainers};
  background-color: var(--color-background-dark);

  img {
    width: 350px;
  }
`

const SectionPagesLoginAndCreateUser = styled.section`
  ${baseStylesContainers};
  background-color: var(--color-background-light);
  text-align: center;

  a {
    color: var(--color-text-gray-dark);

    span {
      color: var(--color-primary-dark);
      transition: 0.2s;
    }

    &:hover {
      span {
        color: var(--color-primary);
      }
    }
  }
`

export {SectionPagesLoginAndCreateUser, DivContainer, DivBanner}