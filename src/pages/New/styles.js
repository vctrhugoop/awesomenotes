import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 1.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      border-radius: 2rem;
      border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.div`
  max-width: 55rem;
  margin: 3.8rem auto;

  padding: 0 2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;
  }
`;
