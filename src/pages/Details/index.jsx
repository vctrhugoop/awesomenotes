import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PiTrashBold } from 'react-icons/pi';
import { FaLink, FaTags } from 'react-icons/fa';

import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

import api from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  const navitage = useNavigate();

  function handleBack() {
    navitage(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realemnte remover a nota?');

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navitage(-1);
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText
              title="Excluir nota"
              isActive
              icon={PiTrashBold}
              onClick={handleRemove}
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && (
              <Section icon={FaLink} title="Links úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section icon={FaTags} title="Marcadores" page="details">
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
