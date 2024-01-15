import { Container } from './styles';

export function Section({ title, icon: Icon, children }) {
  return (
    <Container>
      <h2>
        {Icon && <Icon size={20} />} {title}
      </h2>
      {children}
    </Container>
  );
}
