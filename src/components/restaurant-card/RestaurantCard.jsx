import React from 'react';
import PropTypes from 'prop-types';
import { Highlight } from 'react-instantsearch-dom';
import StarRating from '../star-rating';
import Pill from '../pill';
import { useContextDispatch } from '../../context';
import { deleteRestaurant } from '../../api';
import {
  deleteRestaurantFailed,
  deleteRestaurantStarted,
  deleteRestaurantSuccess,
} from '../../actions';
import './styles.css';

const RestaurantCard = ({ hit, setRefresh }) => {
  const dispatch = useContextDispatch();
  const onDelete = id => {
    dispatch(deleteRestaurantStarted());
    deleteRestaurant(id)
      .then(({ data }) => {
        dispatch(deleteRestaurantSuccess(data));
        setRefresh(prev => !prev);
      })
      .catch(e => dispatch(deleteRestaurantFailed(e)));
  };

  return (
    <article className="restaurant-container">
      <div className="img-container">
        <img src={hit.image_url} alt="restaurant" />
      </div>
      <div className="content">
        <h1>
          <Highlight attribute="name" hit={hit} />
        </h1>
        <div className="rating">
          <StarRating stars={hit.stars_count} totalStars={5} />
          <span>{hit.reviews_count} Reviews</span>
        </div>
        <div className="info">
          <Pill text={hit.food_type} />
          <span>{hit.price_range}</span>
          <span>{`${hit.address}, ${hit.state}`}</span>
        </div>
        <div className="delete">
          <button onClick={() => onDelete(hit.objectID)}>delete</button>
        </div>
      </div>
    </article>
  );
};
RestaurantCard.propTypes = {
  hit: PropTypes.object.isRequired,
  setRefresh: PropTypes.func.isRequired,
};

export default RestaurantCard;
