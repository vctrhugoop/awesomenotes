import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar } from './styles';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/user_avatar_placeholder.svg';

import api from '../../services/api';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState(user.avatar);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>
      <Avatar>
        <img src={avatarUrl} alt="Foto do usuario" />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" onChange={handleChangeAvatar} />
        </label>
      </Avatar>
      <Form>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="mail"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
