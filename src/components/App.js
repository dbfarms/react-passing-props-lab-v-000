import React, { Component } from 'react'; // wha

import FruitBasket from './FruitBasket';

class App extends React.Component {
    constructor(){
        super();
        
        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null,
        }
    }
    
    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
    }
    
    fetchFruit = () => {
      fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
    }


    
    render() {
      return (
         <div>
            <FruitBasket />
        </div>
      )
        
    }
}

export default App;
