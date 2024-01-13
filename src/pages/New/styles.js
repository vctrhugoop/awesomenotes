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
