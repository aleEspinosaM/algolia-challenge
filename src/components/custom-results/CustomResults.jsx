import React from 'react';
import { connectStateResults, Hits } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import RestaurantCard from '../restaurant-card';

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? (
      children
    ) : (
      <div>No results have been found for {searchState.query}.</div>
    )
);

export const CustomResults = ({ setRefresh }) => (
  <Results>
    <Hits
      className="restaurant-container"
      hitComponent={({ hit }) => (
        <RestaurantCard hit={hit} setRefresh={setRefresh} />
      )}
    />
  </Results>
);

CustomResults.propTypes = {
  setRefresh: PropTypes.func.isRequired,
};

export default CustomResults;
