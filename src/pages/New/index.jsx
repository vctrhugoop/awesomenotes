import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Textarea } from '../../components/Textarea';

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
        </Form>
      </main>
    </Container>
  );
}
