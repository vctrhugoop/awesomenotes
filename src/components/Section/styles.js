import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.8rem 0;

  > h2 {
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1.6rem;
    margin-bottom: 2.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .home {
    @media screen and (min-width: 1440px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.6rem;
    }
  }
`;
