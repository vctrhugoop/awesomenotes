import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 1.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      border-radius: 2rem;
      border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }


`;
