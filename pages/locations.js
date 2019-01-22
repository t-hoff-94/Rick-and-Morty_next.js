import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import Characters from '../components/Characters'
import Locations from '../components/Locations'
import PagePicker from '../components/PagePicker'
import { parse, stringify } from 'query-string'

const LocationsPage = props => console.log(props)||(
  <>
  <PagePicker category='locations' pageCount={props.locations.info.pages} page={stringify(props.query)}/>
  <Locations locations={props.locations}/>
  <PagePicker category='locations' pageCount={props.locations.info.pages} page={stringify(props.query)}/>
  </>
)

LocationsPage.getInitialProps = async function({ req, query={}}) {
  const page = stringify(query);
  const res = await fetch(`https://rickandmortyapi.com/api/location?${page}`);
  const data = await res.json()
  return {
    locations: data,
  }
}

export default LocationsPage
