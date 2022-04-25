/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './styles.css';
import algoliasearch from 'algoliasearch';

ReactModal.setAppElement('#root');

export const AddRestaurantModal = ({
  isOpen,
  handleCloseModal,
  searchClient,
}) => {
  const [values, setValues] = useState({
    name: '',
    food_type: '',
  });

  const onHandleChange = ({ target }) => {
    setValues(v => ({
      ...v,
      [target.name]: target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const index = searchClient.initIndex('new-index-1650889963');
    // HardCoded values we only care about name and food type fot this demo
    const data = {
      address: '2829 Ala Kalanikaumaka St.',
      area: 'Hawaii',
      city: 'Koloa',
      country: 'US',
      dining_style: 'Casual Elegant',
      food_type: values.food_type,
      image_url: 'https://www.opentable.com/img/restimages/95188.jpg',
      mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=95188',
      name: values.name,
      neighborhood: 'Koloa',
      objectID: '95188',
      payment_options: ['AMEX'],
      phone: '8087427117x',
      phone_number: '(808) 742-7117',
      postal_code: '96756',
      price: 3,
      price_range: '$31 to $50',
      reserve_url: 'http://www.opentable.com/single.aspx?rid=95188',
      reviews_count: 435,
      rounded_stars_count: 4,
      stars_count: 3.9,
      state: 'HI',
    };
    index.saveObject(data).then(() => {
      // hack found in internet lol
      // eslint-disable-next-line no-param-reassign
      searchClient = algoliasearch(
        process.env.REACT_APP_ID,
        process.env.REACT_APP_KEY
      );
      setValues({ food_type: '', name: '' });
      handleCloseModal();
    });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Modal #1 Global Style Override Example"
      onRequestClose={handleCloseModal}
    >
      <form className="mock-add-restaraunt" onSubmit={onSubmit}>
        <label>
          Restaurant name
          <input
            type="text"
            name="name"
            onChange={onHandleChange}
            value={values.name}
          />
        </label>
        <label>
          Food Type
          <input
            name="food_type"
            onChange={onHandleChange}
            value={values.food_type}
          />
        </label>
        <button disabled={!values.food_type || !values.name} type="submit">
          Submit
        </button>
      </form>
    </ReactModal>
  );
};

AddRestaurantModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  searchClient: PropTypes.object.isRequired,
};

export default AddRestaurantModal;
