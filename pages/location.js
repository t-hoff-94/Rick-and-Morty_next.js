import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import Characters from '../components/Characters'
import Location from '../components/Location'
import PagePicker from '../components/PagePicker'
import { parse, stringify } from 'query-string'

const SingleLocation = props => console.log(props)||(
  <>
  <Location location={props.location}/>
  </>
)

SingleLocation.getInitialProps = async function({ req, query={}}) {
  const id = query.id;
  const res = await fetch(`https://rickandmortyapi.com/api/location/[${id}]`);
  const data = await res.json()
  return {
    location: data,
  }
}

export default SingleLocation
