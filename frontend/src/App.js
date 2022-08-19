import { Content, GlobalStyle } from './theme/global.style';


import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { About } from './components/About/About';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content>
        <Home />
        <About />
      </Content>
      
    </>
  );
}

export default App;
