import Header from './components/Header/index.js';
import styled from 'styled-components';
import Pesquisa from './components/Pesquisa/index.js';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 100%);
`

function App() {
    return (
      <AppContainer> 
        <Header/>
        <Pesquisa/>
      </AppContainer>
  );
}

export default App;