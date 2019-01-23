import React, { Component } from 'react'
import slug from 'slug'
import Link from 'next/link'
import ListStyles from './styles/ListStyles'
import reverseAcronym from './helpers/helper'

class Episodes extends Component {
  render() {
    return (
      <ul>
      {this.props.episodes.results.map(episode => (
        <li key={episode.id} style={{marginBottom: 25}}>
          <ListStyles>
            <Link href={{
              pathname: '/episode',
              query: {id: episode.id}
            }}>
              <a><h3>{episode.name}</h3></a>
            </Link>
            <div className='info'>
              <p><span>Air Date</span>{episode.air_date}</p>
              <p><span>Episode</span>{reverseAcronym(episode.episode)}</p>
            </div>
          </ListStyles>
        </li>
      ))}
      </ul>
    )
  }
}

export default Episodes
