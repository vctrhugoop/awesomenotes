import { useState, useEffect } from 'react';

import { FiPlus, FiSearch } from 'react-icons/fi';
import { FaStickyNote } from 'react-icons/fa';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { MenuMobile } from '../../components/MenuMobile';
import api from '../../services/api';

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fatchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }
    fatchTags();
  }, []);

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
          {tags &&
            tags.map(tag => (
              <li key={String(tag.id)}>
                <ButtonText title={tag.name} />
              </li>
            ))}
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
