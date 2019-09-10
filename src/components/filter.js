import React from 'react';
import { Grid, Input, Dropdown } from 'semantic-ui-react';
function Filter(props) {
  const options = [
    { key: 1, text: 'highest Pokemons', value: 'height' },
    { key: 2, text: 'less weaknesses', value: 'weaknesses' },
  ]


  return (
    <div
      color='teal'
      className='filter-container'
    >
      <Grid relaxed columns='equal'>
        <Grid.Row >
          <Grid.Column width={9}>
            <Input
              className='search-pokemon'
              icon='search'
              placeholder='Search Pokemons...'
              size='huge'
              style={{ borderColor: '#03a9f48f' }}
              //value={props.searchString}
              onChange={e => props.onSearchChange(e.target.value)}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Dropdown
              deburr
              search
              selection
              value={props.selectedItem}
              placeholder='Choose a filter '
              onChange={(__, { value }) => props.onDropdownChange(value)}
              options={options}
              openOnFocus
            />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>
  )

}


export default Filter;