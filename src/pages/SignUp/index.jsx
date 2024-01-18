import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../services/api.js';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Wrapper, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado');
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possivel cadastrar');
        }
      });
  }

  return (
    <Container>
      <Wrapper>
        <Background />
        <Form>
          <h1>AwesomeNotes</h1>
          <p>Aplicação para salvar e gerencias suas anotações.</p>
          <h2>Crie sua conta!</h2>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={e => setName(e.target.value)}
          />
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
          <Button title="Cadastrar" onClick={handleSignUp} />
          <span>
            <Link to="/">
              <ButtonText
                title="Volte para login"
                isActive
                icon={FiArrowLeft}
              />
            </Link>
          </span>
        </Form>
      </Wrapper>
    </Container>
  );
}
