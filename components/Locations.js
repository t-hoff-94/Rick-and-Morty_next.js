import React, { Component } from 'react'
import slug from 'slug'
import styled from 'styled-components'

const LocationsStyles = styled.div`
  align-items: center;
  border-bottom: 1px solid orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  max-width: 777px;
  margin: 0 auto;
  .info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 444px;
  }
`;

class Locations extends Component {
  render() {
    const locations = this.props.locations.results
    return (
      <ul>
      {locations.map(location => (
        <li style={{marginBottom: 15}} key={location.id}>
          <LocationsStyles>
            <h3>{location.name}</h3>
            <div className='info'>
              <p>{location.type}</p>
              <p>{location.dimension}</p>
            </div>
          </LocationsStyles>
        </li>
      ))}
      </ul>
    )
  }
}

export default Locations
