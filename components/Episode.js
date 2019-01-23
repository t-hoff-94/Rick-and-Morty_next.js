import React, { Component } from 'react'
import Characters from './Characters'
import HeaderStyles from './styles/HeaderStyles'
import reverseAcronym from './helpers/helper'

class Episode extends Component {
  state = {
    loading: true,
    characters: null,
  }
  async componentDidMount() {
    const characterString = this.props.episode[0].characters.map(string => {
      return  string.split('/').slice(5).join('');
    })
    console.log(characterString)
    const res = await fetch(`https://rickandmortyapi.com/api/character/${characterString}`);
    const characters = await res.json();
    if(!Array.isArray(characters)) {
      this.setState(()=>({ characters: [characters] , loading: false}));
    } else {
      this.setState(()=>({ characters , loading: false}));
    }
  }

  render() {
    console.log(this.state)
    const episode = this.props.episode[0];
    return (
      <HeaderStyles>
         <h1>{episode.name}</h1>
         <ul>
           <li>
             <h2>Air Date:<span>{episode.air_date}</span></h2>
           </li>
           <li>
             <h2>Episode<span>{reverseAcronym(episode.episode)}</span></h2>
           </li>
         </ul>
         <h3>Some of the characters from "{episode.name}"</h3>
         {this.state.loading ? <p>loading</p> : <Characters characters={this.state.characters}/>}
      </HeaderStyles>
    )
  }
}

export default Episode
