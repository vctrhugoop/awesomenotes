import { FiLogIn, FiMenu } from 'react-icons/fi';
import { Container, Profile, Buttons } from './styles';

import { useAuth } from '../../hooks/auth';

export function Header({ setMenuIsVisible }) {
  const { signOut } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/vctrhugoop.png" alt="User photo" />
        <div>
          <span>Bem-vindo</span>
          <strong>Victor Oliveira</strong>
        </div>
      </Profile>
      <Buttons>
        <button className="menu">
          <FiMenu onClick={() => setMenuIsVisible(true)} />
        </button>
        <button className="logout" onClick={signOut}>
          <FiLogIn />
          <span>Sair</span>
        </button>
      </Buttons>
    </Container>
  );
}
