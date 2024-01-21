import { Container } from './styles';

export function Section({ title, icon: Icon, children, page }) {
  return (
    <Container>
      <h2>
        {Icon && <Icon size={20} />} {title}
      </h2>
      <div className={page}>{children}</div>
    </Container>
  );
}
