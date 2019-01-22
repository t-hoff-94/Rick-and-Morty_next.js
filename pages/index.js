import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import Character from '../components/Character'
import CharacterCtr from '../components/styles/CharacterCtr'

const HomePage = props => (
  <>
  <CharacterCtr>
    {props.characters.map(character => {
      if(character.id === 1) {
        return (
          <Character key={character.id} data={character} special={true} />
        )
      } else {
        return <Character key={character.id} data={character} />
      }
    })}
  </CharacterCtr>
  <Link href='/characters'>
    <a
      style={{
      margin: '0 auto',
      fontFamily: `'Gloria Hallelujah', cursive`}}
      className='button'>
        View all Characters
    </a>
  </Link>
  </>
)

HomePage.getInitialProps = async function() {
  const res = await fetch('https://rickandmortyapi.com/api/character/1,3,5');
  const data = await res.json()
  return {
    characters: data,
  }
}

export default HomePage
