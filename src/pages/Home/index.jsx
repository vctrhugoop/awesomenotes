import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiPlus, FiSearch } from 'react-icons/fi';
import { FaStickyNote } from 'react-icons/fa';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

import api from '../../services/api';

export function Home() {
  const [search, setSearch] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navitage = useNavigate();

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

  function handleDetails(id) {
    navitage(`/details/${id}`);
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
      <Container>
        <Brand>
          <h1>AwesomeNotes</h1>
        </Brand>
        <Header />
        <Menu>
          <h3>Filtrar por tags</h3>
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
          <Section icon={FaStickyNote} title="Minhas Notas" page="home">
            {notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))}
          </Section>
        </Content>
        <NewNote to="/new">
          <FiPlus />
          <span>Criar nota</span>
        </NewNote>
      </Container>
    </>
  );
}
