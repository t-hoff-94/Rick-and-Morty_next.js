import React, { Component } from 'react'
import styled from 'styled-components'
import Characters from './Characters'

const LocationStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 4rem 0 2rem;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 444px;
  }
  span {
    color: ${props => props.theme.teal};
    line-height: 1;
    font-size: 2rem;
  }
`;

class Location extends Component {
  state = {
    loading: true,
    residents: null,
  }
  async componentDidMount() {
    const characterString = this.props.location[0].residents.map(string => {
      return  string.split('/').slice(5).join('');
    })
    const res = await fetch(`https://rickandmortyapi.com/api/character/${characterString}`).catch(err=> console.log(err));
    const residents = await res.json();
    console.log(Array.isArray(residents))
    if(!Array.isArray(residents)) {
      this.setState(()=>({ residents: [residents] , loading: false}));
    } else {
      this.setState(()=>({ residents , loading: false}));
    }
    console.log(this.state)
  }

  render() {
    const location = this.props.location[0];
    return (
      <LocationStyles>
      <p>test</p>
        <h1>{location.name}</h1>
        <ul>
          <li>
            <h2>Dimension:<span>{location.dimension}</span></h2>
          </li>
          <li>
            <h2>Type:<span>{location.type}</span></h2>
          </li>
        </ul>
        <h3>Some of the residents from {location.name}</h3>
        {this.state.loading ? <p>loading</p> : <Characters characters={this.state.residents}/>}
      </LocationStyles>
    )
  }
}

export default Location
