import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Wrapper, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Wrapper>
        <Form>
          <h1>AwesomeNotes</h1>
          <p>Aplicação para salvar e gerencias suas anotações.</p>
          <h2>Faça seu login!</h2>
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
          <Button title="Entrar" onClick={handleSignIn} />
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
