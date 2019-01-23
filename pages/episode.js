import React from 'react'
import fetch from 'isomorphic-fetch'
import Episode from '../components/Episode'
import { parse, stringify } from 'query-string'

const SingleLocation = props => console.log(props)||(
  <>
  <Episode episode={props.episode}/>
  </>
)

SingleLocation.getInitialProps = async function({ req, query={}}) {
  const id = query.id;
  const res = await fetch(`https://rickandmortyapi.com/api/episode/[${id}]`);
  const data = await res.json();
  return {
    episode: data,
  }
}

export default SingleLocation
