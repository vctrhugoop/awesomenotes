import styled from 'styled-components';
import backgroundImg from '../../assets/Notes-pana.svg';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  place-content: center;
`;

export const Wrapper = styled.div`
  max-width: 102.4rem;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > span {
    font-size: 1.4rem;
    margin-top: 8rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Background = styled.div`
  @media screen and (min-width: 1024px) {
    background: url(${backgroundImg}) no-repeat center center;
  }
`;
