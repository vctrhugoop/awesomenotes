import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
            <ButtonText title="Excluir nota" isActive icon={PiTrashBold} />
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
              <Section icon={FaTags} title="Marcadores">
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <a href="/">
              <Button title="Voltar" />
            </a>
          </Content>
        </main>
      )}
    </Container>
  );
}
