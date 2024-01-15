import { useState } from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi';
import { FaStickyNote } from 'react-icons/fa';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { MenuMobile } from '../../components/MenuMobile';

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Container>
        <Brand>
          <h1>AwesomeNotes</h1>
        </Brand>
        <Header setMenuIsVisible={setMenuIsVisible} />
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
        <Search>
          <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
        </Search>
        <Content>
          <Section icon={FaStickyNote} title="Minhas Notas">
            <Note
              data={{
                title: 'Exemplo 1',
                tags: [{ id: '1', name: 'exemplo 1' }],
              }}
            />
            <Note
              data={{
                title: 'Exemplo 2',
                tags: [{ id: '2', name: 'exemplo 2' }],
              }}
            />
            <Note
              data={{
                title: 'Exemplo 3',
                tags: [{ id: '3', name: 'exemplo 3' }],
              }}
            />
          </Section>
        </Content>
        <NewNote to="/new">
          <FiPlus />
          Criar nota
        </NewNote>
      </Container>
    </>
  );
}
