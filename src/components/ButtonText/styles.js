import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive === 'true' ? theme.COLORS.BLUE_200 : theme.COLORS.GRAY_100};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 0.5rem;
  }
`;
