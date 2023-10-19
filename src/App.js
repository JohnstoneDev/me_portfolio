
import './Styles/App.css'

import { Paths } from './Routes/Routes';
import { NavBar } from '../src/Components/Navigation/Navbar'
import { Container } from './Components/Container/Container';

function App() {
  return (
    <Container>
      <main>
        <NavBar />
        <Paths />
      </main>
    </Container>
  );
}

export default App;
