import  AnimatedCursor  from 'react-animated-cursor'

import './Styles/App.css'

import { Paths } from './Routes/Routes';
import { NavBar } from '../src/Components/Navigation/Navbar'
import { Container } from './Components/Container/Container';

function App() {
  return (
    <Container>
      <AnimatedCursor
        color="#e6f1ff" innerSize={8} outerSize={35}
        innerScale={1} outerScale={1.7} outerAlpha={0}
        outerStyle={{ mixBlendMode: 'exclusion'}}
        />
      <main>
        <NavBar />
        <Paths />
      </main>
    </Container>
  );
}

export default App;
