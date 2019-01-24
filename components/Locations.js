import React, { Component } from 'react'
import Link from 'next/link'
import slug from 'slug'
import ListStyles from './styles/ListStyles'

class Locations extends Component {
  render() {
    const locations = this.props.locations.results
    return (
      <ul>
      {locations.map(location => (
        <li style={{marginBottom: 15}} key={location.id}>
          <ListStyles>
            <Link href={{
              pathname: '/location',
              query: {id: location.id}
            }}>
              <a><h3>{location.name}</h3></a>
            </Link>
            <div className='info'>
              <p><span>Type:</span>{location.type}</p>
              <p><span>Dimension:</span>{location.dimension}</p>
            </div>
          </ListStyles>
        </li>
      ))}
      </ul>
    )
  }
}

export default Locations
