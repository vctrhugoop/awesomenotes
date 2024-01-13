import { RiLogoutBoxRLine, RiMenuFill } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/vctrhugoop.png" alt="User photo" />
        <div>
          <span>Bem-vindo</span>
          <strong>Victor Oliveira</strong>
        </div>
      </Profile>
      <Logout>
        <RiMenuFill />
        <RiLogoutBoxRLine />
        <span>Sair</span>
      </Logout>
    </Container>
  );
}
