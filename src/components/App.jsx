import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { Button } from './Button/Button';

export const App = () => {
  return (
    <Container>
      <Section title="Please leave feedback">
        <Button text="Good" />
        <Button text="Neutral" />
        <Button text="Bad" />
      </Section>
      <Section title="Statistics"></Section>
    </Container>
  );
};
