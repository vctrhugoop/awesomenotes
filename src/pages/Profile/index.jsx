import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </a>
      </header>
      <Avatar>
        <img src="https://github.com/vctrhugoop.png" alt="Foto do usuario" />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" />
        </label>
      </Avatar>
      <Form>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="mail" icon={FiMail} />
        <Input placeholder="Senha Atual" type="password" icon={FiLock} />
        <Input placeholder="Nova senha" type="password" icon={FiLock} />
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
