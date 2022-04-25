import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Pagination,
  Configure,
} from 'react-instantsearch-dom';

import { useContextState } from './context';
import CustomResults from './components/custom-results';
import RestaurantModal from './components/restaurant-modal';
import { API_STATUS } from './constants';
import './App.css';

function App({ searchClient }) {
  const [displayAddModal, setDisplayAddModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { isDeletingMessage } = useContextState();

  if (isDeletingMessage === API_STATUS.PENDING) {
    return <div>We are Deleting your restaurant</div>;
  }

  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">algo-restaurants</a>
        </h1>
        <button onClick={() => setDisplayAddModal(true)} className="header-cta">
          Add Restaurant
        </button>
      </header>

      <div className="container">
        <InstantSearch
          searchClient={searchClient}
          onSearchStateChange={() => setRefresh(prev => !prev)}
          indexName="new-index-1650889963"
          refresh={refresh}
        >
          <div className="search-panel">
            <div className="search-panel__filters">
              <Configure hitsPerPage={10} />
              <RefinementList
                attribute="food_type"
                showMore
                showMoreLimit={100}
                limit={5}
              />
            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <CustomResults setRefresh={setRefresh} />
              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
      {displayAddModal && (
        <RestaurantModal
          isOpen={displayAddModal}
          handleCloseModal={() => setDisplayAddModal(false)}
          searchClient={searchClient}
        />
      )}
    </div>
  );
}

App.propTypes = {
  searchClient: PropTypes.object.isRequired,
};

export default App;
