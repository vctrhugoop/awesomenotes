import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: grid;
  grid-template-rows: fit-contant;
  grid-template-areas:
    'brand'
    'menu '
    'menu '
    'logout'
    'newnote ';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  transform: translateX(-100%);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 3.2rem;
    right: 2.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  ${({ $isvisible }) =>
    $isvisible &&
    css`
      transform: translateX(0);
      overflow: hidden;
    `}
`;

export const Brand = styled.div`
  grid-area: brand;
  align-self: center;
  justify-self: center;

  padding: 2rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 2.4rem;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > li {
    list-style: none;
    margin-bottom: 2.4rem;
    text-align: center;
  }
`;

export const Logout = styled.div`
  grid-area: logout;
  align-self: center;
  justify-self: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const NewNotes = styled(Link)`
  width: 100%;

  grid-area: newnote;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
