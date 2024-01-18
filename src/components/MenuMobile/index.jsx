import { FiX, FiPlus, FiLogIn } from 'react-icons/fi';
import { Container, Brand, Menu, Logout, NewNotes } from './styles';

import { ButtonText } from '../../components/ButtonText';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Container $isvisible={menuIsVisible}>
      <FiX size={30} onClick={() => setMenuIsVisible(false)} />
      <Brand>
        <h1>AwesomeNotes</h1>
      </Brand>
      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Exemplo 1" />
        </li>
        <li>
          <ButtonText title="Exemplo 2" />
        </li>
        <li>
          <ButtonText title="Exemplo 3" />
        </li>
      </Menu>
      <Logout>
        <button className="logout">
          <FiLogIn />
          <span>Sair</span>
        </button>
      </Logout>

      <NewNotes to="/new">
        <FiPlus />
        Criar nota
      </NewNotes>
    </Container>
  );
}
