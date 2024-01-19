import { FiLogIn, FiMenu } from 'react-icons/fi';
import { Container, Profile, Buttons } from './styles';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/user_avatar_placeholder.svg';
import api from '../../services/api';

export function Header({ setMenuIsVisible }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
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
