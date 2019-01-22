import React, { Component } from 'react'
import Character from './Character'
import CharacterCtr from './styles/CharacterCtr'

class Characters extends Component {
  render() {
    return (
      <CharacterCtr>
      {this.props.characters.map(character => (
        <Character key={character.id} data={character}/>
      ))}
      </CharacterCtr>
    )
  }
}

export default Characters
