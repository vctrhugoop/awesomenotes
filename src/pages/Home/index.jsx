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
  const [search, setSearch] = useState([]);
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {
    if (tagName === 'all') {
      return setTagSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagSelected(filteredTags);
    } else {
      setTagSelected(prevStage => [...prevStage, tagName]);
    }
  }

  useEffect(() => {
    async function fatchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }
    fatchTags();
  }, []);

  useEffect(() => {
    async function fatchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }
    fatchNotes();
  }, [tagsSelected, search]);

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
            <ButtonText
              title="Todos"
              isActive={tagsSelected.length === 0}
              onClick={() => handleTagSelected('all')}
            />
          </li>
          {tags &&
            tags.map(tag => (
              <li key={String(tag.id)}>
                <ButtonText
                  title={tag.name}
                  isActive={tagsSelected.includes(tag.name)}
                  onClick={() => handleTagSelected(tag.name)}
                />
              </li>
            ))}
        </Menu>
        <Search>
          <Input
            placeholder="Pesquisar pelo título"
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
          />
        </Search>
        <Content>
          <Section icon={FaStickyNote} title="Minhas Notas">
            {notes.map(note => (
              <Note key={String(note.id)} data={note} />
            ))}
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
