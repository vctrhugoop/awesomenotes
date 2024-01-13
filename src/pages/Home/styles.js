import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas:
      'brand header'
      'menu search'
      'menu content'
      'newnote content';
  }

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  display: none;
  grid-area: brand;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  display: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 6.4rem;
  text-align: center;

  > li {
    list-style: none;
    margin-bottom: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Search = styled.div`
  grid-area: search;

  padding: 2rem 2rem 0;

  @media screen and (min-width: 1024px) {
    padding: 4rem 8.4rem 0;
  }
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 1.3rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 2rem;
    border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  @media screen and (min-width: 1024px) {
    padding: 0 8.4rem;
  }
`;

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: none;
  svg {
    margin-right: 0.8rem;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
