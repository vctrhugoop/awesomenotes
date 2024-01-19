import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 2rem;

    @media screen and (min-width: 768px) {
      padding: 0 12.4rem;
    }
  }
`;
export const Avatar = styled.div`
  position: relative;
  margin: -6.4rem auto 3.2rem;

  width: 12.6rem;
  height: 12.6rem;

  > img {
    object-fit: cover;
    width: 12.6rem;
    height: 12.6rem;
    border-radius: 50%;
  }

  > label {
    width: 3rem;
    height: 3rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE_200};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.4rem;
    right: 0.4rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto;

  > div:nth-child(3) {
    margin-top: 2.4rem;
  }
`;
