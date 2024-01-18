import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 10.5rem;
  width: 100%;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 2rem;

  @media screen and (min-width: 1024px) {
    padding: 0 8.4rem;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.8rem;
    }
  }
`;

export const Buttons = styled.div`
  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  .menu,
  .logout {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > svg {
      font-size: 2.4rem;
      margin-right: 0.5rem;
    }
  }

  .menu {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  .logout {
    display: none;

    @media screen and (min-width: 1024px) {
      display: flex;
    }
  }
`;
