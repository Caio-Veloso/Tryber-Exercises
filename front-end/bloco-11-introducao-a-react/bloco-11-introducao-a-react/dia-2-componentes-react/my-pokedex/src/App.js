
import React from 'react';
import pokemons from './data';
import Pokedex from './components/Pokedex';


class App extends React.Component {
  render(){
    console.log(pokemons)
    return (
      <main>
        <h1>Pokedex</h1>
        <Pokedex />
      </main>
    )
  }
}
export default App;
