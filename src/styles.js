import styled, { createGlobalStyle } from 'styled-components';
import { backgroundColor, textColor, headerBackground } from './themes'

// css global
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  /* body {
    background-color: ${props => (props.dark ? '#333' : '#ddd')};
    color: ${props => (props.dark ? 'white' : 'black')};
  } */
  body {
    background-color: ${backgroundColor};
    color: ${textColor};
  }
`
// css escopado para cada componente
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${headerBackground};
  padding: 20px;

  span {
    color: ${textColor};
  }
`
export const Title = styled.h1`
  color: #00ff64;
`
export const Main = styled.main`
  padding: 20px;
  color: ${textColor};
`
// extendendo um Componente
export const Card = styled(Header)`
  color: ${textColor};
  margin-top: 10px;
`
export const Btn = styled.button`
  background: #0099FF;
  border: 2px solid #0099FF;
  border-radius: 3px;
  color: #FDFDFD;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;

  /* pode usar a sintaxe do sass */
  &:hover {
    background: #fa0;
    border: 2px solid #fa0;
  }
`
