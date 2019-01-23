import React from 'react'
import fetch from 'isomorphic-fetch'
import Episodes from '../components/Episodes'
import PagePicker from '../components/PagePicker'
import { stringify } from 'query-string'

const EpisodesPage = props => console.log(props)||(
  <>
  <h1 style={{textAlign: 'center', marginBottom: 25}}>Rick and Morty Episodes</h1>
  <Episodes episodes={props.episodes}/>
  </>
)

EpisodesPage.getInitialProps = async function({ req, query={}}) {
  const page = stringify(query);
  const res = await fetch(`https://rickandmortyapi.com/api/episode?${page}`);
  const data = await res.json()
  return {
    episodes: data,
  }
}

export default EpisodesPage
