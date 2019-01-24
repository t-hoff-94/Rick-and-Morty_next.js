import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  #hero {
    display: flex;
    margin: 0 auto;
    max-width: 777px;
  }
  .nav {
    display: flex;
    justify-content: center;
    a {
      color: ${props => props.theme.teal};
      text-decoration: none;
    }
    li {
      padding: 1rem;
      list-style-type: none;
      text-transform: uppercase;
    }
  }
`;

const Nav = props => (
  <ul className='nav'>
    <li>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href='/characters'>
        <a>Characters</a>
      </Link>
    </li>
    <li>
      <Link href='/locations'>
        <a>Locations</a>
      </Link>
    </li>
    <li>
      <Link href='/episodes'>
        <a>Episodes</a>
      </Link>
    </li>
  </ul>
)

const Header = (props) => (
  <HeaderStyles>
    <Hero />
    <Nav />
  </HeaderStyles>
)

export default Header;
