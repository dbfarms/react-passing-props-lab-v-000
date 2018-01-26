import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, onUpdateFilter }) => 
      <div className="fruit-basket">
        <Filter 
          filters={filters}
          handleChange={onUpdateFilter} />
        <FilteredFruitList
          fruit={fruit} 
          filter={currentFilter}/>
      </div>  

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};

export default FruitBasket

/*


handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.props({ selectedFilter: event.target.value });
  }



  render() {
    return (
      
    );
  }
}

export default FruitBasket;
*/