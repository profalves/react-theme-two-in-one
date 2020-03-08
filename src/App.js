import React from 'react';
import { ThemeProvider} from 'styled-components'
import { Title, Header, GlobalStyle, Main, Card, Btn } from './styles'

function App() {
  return (
    <>
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      <Header >
        <Title>Tutor Café</Title>
        <span>By Rodrigo Alves</span>
      </Header>
      <Main>
        conteudo do site
        <Card>
          novo card
        </Card>
        <Btn>Meu Botão</Btn>
      </Main>
    </ThemeProvider>
    </>
  );
}

export default App;
