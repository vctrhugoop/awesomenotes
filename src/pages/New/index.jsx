import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">
              <ButtonText title="Voltar" icon={FiArrowLeft} />
            </a>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="Exemplo 1" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="Exemplo 1" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
