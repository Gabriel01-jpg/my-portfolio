import { Content, GlobalStyle } from './theme/global.style';


import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { ScrollReveal } from './components/ScrollReveal/ScrollReveal';

function App() {
  return (
    <>
      <GlobalStyle />
      <Content>
      <ScrollReveal>
          <Header />
          <Home />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
      </Content>
      
    </>
  );
}

export default App;
