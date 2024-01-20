import { useState } from 'react';
import { Link } from 'react-router-dom';

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

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink('');
  }

  function handleDeleteLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">
              <ButtonText title="Voltar" icon={FiArrowLeft} />
            </Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section icon={FaLink} title="Links úteis">
            {links.map((link, index) => (
              // eslint-disable-next-line react/jsx-key
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleDeleteLink(link)}
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
              <NoteItem value="Exemplo 1" />
              <NoteItem value="Exemplo 2" />
              <NoteItem value="Exemplo 3" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
