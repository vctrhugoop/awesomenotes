import { Container } from './styles';

export function Button({ title, loading = false, onClick }) {
  return (
    <Container type="button" disabled={loading} onClick={onClick}>
      {loading ? 'Loading...' : title}
    </Container>
  );
}
