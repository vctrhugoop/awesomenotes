import { FiLogIn } from 'react-icons/fi';
import { Container, Profile, Buttons } from './styles';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/user_avatar_placeholder.svg';
import api from '../../services/api';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navitage = useNavigate();

  function logOut() {
    signOut();
    navitage('/');
  }

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
        <button className="logout" onClick={logOut}>
          <FiLogIn />
          <span>Sair</span>
        </button>
      </Buttons>
    </Container>
  );
}
