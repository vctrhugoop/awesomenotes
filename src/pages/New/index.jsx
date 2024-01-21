import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { FaLink, FaTags } from 'react-icons/fa';

import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import api from '../../services/api';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navitage = useNavigate();

  async function handleNewNote() {
    if (!title) {
      return alert('Digite um título da nota');
    }

    if (newLink) {
      return alert('Adicione o link');
    }
    if (newTag) {
      return alert('Adicione a tag');
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    });

    alert('Nota criada com sucesso!');
    navitage(-1);
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink('');
  }

  function handleDeleteLink(deleted) {
    setLinks(prevState => prevState.filter((link, index) => index !== deleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);

    setNewTag('');
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter((tag, index) => index !== deleted));
  }

  function handleBack() {
    navitage(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText
              title="Voltar"
              icon={FiArrowLeft}
              onClick={handleBack}
            />
          </header>
          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section icon={FaLink} title="Links úteis">
            {links.map((link, index) => (
              // eslint-disable-next-line react/jsx-key
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleDeleteLink(index)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section icon={FaTags} title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleDeleteTag(index);
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
