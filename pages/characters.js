import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import Characters from '../components/Characters'
import PagePicker from '../components/PagePicker'
import { parse, stringify } from 'query-string'

const CharactersPage = props => (
  <>
  <PagePicker pageCount={props.characters.info.pages} page={stringify(props.query)}/>
  <Characters characters={props.characters.results}/>
  <PagePicker pageCount={props.characters.info.pages} page={stringify(props.query)}/>
  </>
)

CharactersPage.getInitialProps = async function({ req, query={}}) {
  const page = stringify(query);
  const res = await fetch(`https://rickandmortyapi.com/api/character?${page}`);
  const data = await res.json()
  return {
    characters: data,
  }
}

export default CharactersPage
