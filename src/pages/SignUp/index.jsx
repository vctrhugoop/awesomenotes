import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Wrapper, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  return (
    <Container>
      <Wrapper>
        <Background />
        <Form>
          <h1>AwesomeNotes</h1>
          <p>Aplicação para salvar e gerencias suas anotações.</p>
          <h2>Crie sua conta!</h2>
          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha" type="password" icon={FiLock} />
          <Button title="Cadastrar" />
          <span>
            <ButtonText title="Volte para login" isActive icon={FiArrowLeft} />
          </span>
        </Form>
      </Wrapper>
    </Container>
  );
}
