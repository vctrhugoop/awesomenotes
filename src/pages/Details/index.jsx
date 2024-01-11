import { Container, Links, Content } from './styles';
import { PiTrashBold } from 'react-icons/pi';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" isActive icon={PiTrashBold} />
          <h1>Método Pomodoro</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            perspiciatis odio aliquam voluptatem voluptas dolores voluptate
            incidunt officia quos, quis veritatis rerum ratione magni eum error
            numquam sapiente beatae sunt!
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a
                  href="https://pomofocus.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://pomofocus.io/
                </a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Foco" />
            <Tag title="Agil" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
