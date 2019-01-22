import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './Header'
import Meta from './Meta'

const theme = {
  teal: 'rgb(0,128,122)',
  green: '#208000',
  black: '#393939',
  maxWidth: '1200px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  transition: all 2s;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  ${props => props.slide  && 'transform: translateX(-50%);' }
  transition: all 0.3s;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'radnika_next';
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
  ul, li {
    padding: 0;
  }
  .button {
    background: orange;
    border-radius: 40% 20% 40% 40% / 40% 70% 40% 60%;
    border: 5px dotted #fff;
    cursor: pointer;
    color: #000;
    font-size: 22px;
    padding: .5em;
    text-decoration: none;
    transition: all .5s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <GlobalStyle />
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page
