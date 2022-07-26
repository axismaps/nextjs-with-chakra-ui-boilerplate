import Hero from 'components/Hero';
import Container from 'components/Container';
import DarkModeSwitch from 'components/DarkModeSwitch';
import Atlas from 'components/Atlas';

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Hero />
    <Atlas />
  </Container>
);

export default Index;
