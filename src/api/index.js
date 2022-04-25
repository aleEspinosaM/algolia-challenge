import axios from 'axios';

const ID = process.env.REACT_APP_ID || '';
const KEY = process.env.REACT_APP_KEY || '';
const BASE_URL = `https://${ID}.algolia.net/1/indexes/new-index-1650889963`;

export const deleteRestaurant = id =>
  axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      'X-Algolia-API-Key': KEY,
      'X-Algolia-Application-Id': ID,
    },
  });
