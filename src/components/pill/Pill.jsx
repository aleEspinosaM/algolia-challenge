import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Pill = ({ text = '' }) => <div className="pill">{text}</div>;

Pill.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Pill;
