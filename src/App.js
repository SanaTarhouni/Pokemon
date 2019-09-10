import React, { Component } from 'react';
import './App.css';
import Filter from './components/filter';
import PokemonCard from './components/pokemonCard';
import LoadingSpinner from './components/loader';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonsList: [],
      loading: true,
      searchString: "",
      selectedItem: "",
    }

  }
  componentWillMount() {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(response => {
        this.setState({
          pokemonsList: response.data.pokemon,
          loading: false
        })
      })
      .catch(err => console.log(err))

  }
  onSearchChange(data) {
    this.setState({
      searchString: data.trim().toLowerCase()
    });
  }
  onDropdownChange(data) {
    this.setState({
      selectedItem: data
    })

  }

  filter(pokemons) {

    const { searchString } = this.state;

    if (searchString) {
      return pokemons.filter(pokemon => {
        return (
          pokemon.name.toLowerCase().includes(searchString) ||
          pokemon.type.map(item => {
            return item.toLowerCase()
          }).includes(searchString)
        )
      });
    }

    let result = [...pokemons];

    const { selectedItem } = this.state;


    if (selectedItem.length && selectedItem === "height") {
      result = result.sort((a, b) => {
        let aValue = a.height.slice(0.4)
        let bValue = b.height.slice(0.4)

        return parseFloat(bValue) - parseFloat(aValue)
      })

    }

    if (selectedItem.length && selectedItem === "weaknesses") {
      result = result.sort((a, b) => {
        return a.weaknesses.length - b.weaknesses.length
      })

    }

    return result
  }






  render() {
    return (

      <div className="App">
        {this.state.loading ?
          <LoadingSpinner />
          :

          <Grid>
            <Grid.Row>
              <Filter
                onSearchChange={data => this.onSearchChange(data)}
                onDropdownChange={data => this.onDropdownChange(data)}
                selectedItem={this.state.selectedItem}

              />
            </Grid.Row>
            <Grid.Row >
              {this.filter(this.state.pokemonsList).map((pokemon, i) => {

                return (

                  <PokemonCard key={i} pokemon={pokemon} />

                )

              })}
            </Grid.Row>
          </Grid>


        }
      </div>

    );
  }
}

export default App;
