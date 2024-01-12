import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 2.8rem 0;

    &::-webkit-scrollbar {
      width: 1.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      border-radius: 2rem;
      border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 2rem;
  }

  > p {
    margin: 1.6rem 0 2.8rem;
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
