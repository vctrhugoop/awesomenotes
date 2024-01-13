import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <h1>AwesomeNotes</h1>
          <p>Aplicação para salvar e gerencias suas anotações.</p>
          <h2>Faça seu login!</h2>
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha" type="password" icon={FiLock} />
          <Button title="Entrar" />
          <span>
            Não tem uma conta?
            <Link to="/register">
              <ButtonText title="Registre-se" isActive />
            </Link>
          </span>
        </Form>
        <Background />
      </Wrapper>
    </Container>
  );
}
