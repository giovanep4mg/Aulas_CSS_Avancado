import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Titulo = styled.h1`
color: #61ee32
`;

const SubTitulo = styled.h2`
color: #344fff
`;

const Artigo = styled.section`
color: #999f33
`;

const Titulo2 = styled.h1`
color: blue;
font-size: 25px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titulo>Meu site</Titulo>
        <SubTitulo>Exemplo</SubTitulo>
        <Artigo>
                Mussum Ipsum, cacilds vidis  litro abertis 
                Manduma <b>pindureta</b> quium dia nois paga. 
                Viva Forevis aptent taciti sociosqu ad litora torquent. 
                In elementis mé pra quem é amistosis quis leo. 
                Diuretics paradis num copo é motivis de denguis.
        </Artigo>
        
        <Titulo2>Segunda Parte</Titulo2>
        <Artigo>
                Mussum Ipsum, cacilds vidis  litro abertis 
                Manduma <b>pindureta</b> quium dia nois paga. 
                Viva Forevis aptent taciti sociosqu ad litora torquent. 
                In elementis mé pra quem é amistosis quis leo. 
                Diuretics paradis num copo é motivis de denguis.
        </Artigo>
      </header>
    </div>
  );
}

export default App;
