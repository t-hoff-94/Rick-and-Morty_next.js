import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CharacterStyles = styled.div`
  margin: 10px;
  .character {
    border-radius: 15px;
    box-shadow: 5px 6px 16px 0px rgba(0,0,0,0.5);
    display: flex;
    font-family: 'Gloria Hallelujah', cursive;
    position: relative;
    overflow: hidden;
    transition: all .5s;
    margin: 0;
    z-index: 0;
  }
  .details {
    display: flex;
    justify-content: center;
    padding: 7px 0;
  }
  .dtl-btn {
    background: orange;
    border-radius: 40% 20% 40% 40% / 40% 70% 40% 60%;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
  }
  .character div {
    position: absolute;
    background-color: rgba(0,0,0,.7);
    display: flex;
    color: #fff;
    flex-direction: column;
    padding: 1em;
    transition: top .2s ease-in-out, bottom .2s ease-in-out;
    width: 100%;
  }
  .character img {
  m ax-width: 100%;
  }
  .character--hidden {
    bottom: 100%;
    top: -250%;
  }
  .character--active {
    bottom: 0;
    top: 0;
  }

  .character--hidden h2 {
    text-align: center;
  }
  .character__info {
    font-family: sans-serif;
    width: 100%;
  }
  .character__info tr {
    border-bottom: 2px solid rgba(255,255,255, 0.5);
    color: orange;
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  }
  .character h2 {
    margin: 0 0 15px 0;
  }
`;

class Character extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  state = {
    active: this.props.special,
  }

  handleClick = (e) => {
    e.preventDefault();
    this.state.active
    ? this.setState(()=>({active: false}))
    : this.setState(()=>({active: true}))

  }

  render() {
    const { data } = this.props;
    return (
        <CharacterStyles>
          <figure className='character'>
            <div className={this.state.active ? 'character--active' : 'character--hidden'}>
              <h2>{data.name}</h2>
              <table className="character__info">
                <tbody>
                  <tr>
                    <th>Species</th><td>{data.species}</td>
                  </tr>
                  <tr>
                    <th>Status</th><td>{data.status}</td>
                  </tr>
                  <tr>
                    <th>Origin</th><td>{data.origin.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img className='character-avatar' src={data.image} alt={data.name}></img>
          </figure>
          <div className='details'>
            <button className='dtl-btn' onClick={this.handleClick}>{this.state.active ? 'close' : 'details'}</button>
          </div>
        </CharacterStyles>
    )
  }
}

export default Character;
