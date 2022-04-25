import React from 'react';
import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// import styles from './StarRating.module.scss';

const minHalfRatingDecimal = 0.25;
const maxHalfRatingDecimal = 0.75;

function StarRating({ stars, totalStars }) {
  const getIcon = starIndex => {
    const decimal = stars % 1;
    const fillStarIconProps = <BsStarFill />;
    const outlineStarIconProps = <BsStar />;
    const halfStarIconProps = <BsStarHalf />;

    // check if it's last star and there is decimal then calculate icon
    if (starIndex === Math.floor(stars) && Boolean(decimal)) {
      const isHalfRating =
        decimal > minHalfRatingDecimal && decimal < maxHalfRatingDecimal;
      const isFullRating = decimal >= maxHalfRatingDecimal;
      const isNoRating = decimal <= minHalfRatingDecimal;

      if (isFullRating) {
        return fillStarIconProps;
      } else if (isNoRating) {
        return outlineStarIconProps;
      } else if (isHalfRating) {
        return halfStarIconProps;
      }
    }

    if (starIndex < stars) {
      return fillStarIconProps;
    } else {
      return outlineStarIconProps;
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}> {getIcon(index)} </span>
      ))}
    </div>
  );
}

StarRating.propTypes = {
  stars: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
};

export default StarRating;
