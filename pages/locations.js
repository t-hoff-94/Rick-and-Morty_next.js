import React from 'react'
import fetch from 'isomorphic-fetch'
import Locations from '../components/Locations'
import PagePicker from '../components/PagePicker'
import { stringify } from 'query-string'

const LocationsPage = props => console.log(props)||(
  <>
  <h1 style={{textAlign: 'center', marginBottom: 25}}>Locations explored by Rick and Morty</h1>
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
