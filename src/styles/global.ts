import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#00BFB2",
    primaryDark: "#008C83",
    backgroundDark: "#102227",
    backgroundLight: "#FCFDFE",
    textGray: "#C6C9D2",
    textGrayDark: "#9FA2B4",
    textLight: "#FCFDFE",
    border: "#DFE0EB",
    black: "#252733",
    error: "#F12B2C",
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap');
  
  :root {
    --color-background-dark: ${theme.colors.backgroundDark};
    --color-background-light: ${theme.colors.backgroundLight};
    --color-primary: ${theme.colors.primary};
    --color-primary-dark: ${theme.colors.primaryDark};
    --color-border: ${theme.colors.border};
    --color-text-gray: ${theme.colors.textGray};
    --color-text-gray-dark: ${theme.colors.textGrayDark};
    --color-text-light: ${theme.colors.textLight};
    --color-text-black: ${theme.colors.black};
    --color-text-error: ${theme.colors.error};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 93.75%
    }
    
    @media (max-width: 780px) {
      font-size: 87.5%
    }
  }

  body {
    font-family: "Mulish", sans-serif;
  }
    
  button {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover {
    filter: brightness(0.9);
  }

  [disabled] {
    opacity: 0.3;
    cursor: not-allowed;

  }

  li {
    cursor: pointer;
  }


  .react-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  }

  .react-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    gap: 40px;
    width: 100%;
    background-color: var(--color-background-light);
    max-width: 570px;
    padding: 40px;

    > div {
      display: flex;
      gap: 30px;
    }


    @media(max-width: 780px) {
      width: 80%;

      button {
        width: 80px;
      }
    }

  }

`

export {GlobalStyle, theme}