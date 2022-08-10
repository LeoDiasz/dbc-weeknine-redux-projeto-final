import styled from "styled-components";

const NavContent = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 35vh;
  gap: 40px;
  padding: 40px 0;
  background-color: var(--color-background-dark);


  @media (max-width: 1400px) {
    flex-direction:  row;
    padding: 20px 40px;
    min-width: 100%;

    ul {
      flex-direction: row;
      align-items: center;

      li {
        width: 30%;
      }

      a {
        padding: 10px 0;
      }

      li:hover {
        background-color: transparent;

        a {
          color: var(--color-primary);
          text-decoration: underline;
        }
      }

    }

  }

  @media (max-width: 576px) {

    img {
      width: 100px;
    }

    > button {
      min-width: 80px;
      padding: 10px 0px;
      min-height: 20px;
    }
  }

`

const ListContent = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    
    li {
      width: 100%;
      transition: 0.1s;
    }

    a {
      display: inline-block;
      padding: 30px 0;
      width: 100%;
      color: var(--color-text-gray);
      font-weight: bold;
    }

    li:hover {
      background-color: var(--color-primary);

      a {
        color: var(--color-text-light);
      }
    }

`
export {NavContent, ListContent}