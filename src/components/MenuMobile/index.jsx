import { FiX, FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, NewNotes } from './styles';

import { ButtonText } from '../../components/ButtonText';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  console.log(menuIsVisible);
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
      <NewNotes to="/new">
        <FiPlus />
        Criar nota
      </NewNotes>
    </Container>
  );
}
