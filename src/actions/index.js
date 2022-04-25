export const DELETE_RESTAURANT_STARTED = 'DELETE_RESTAURANT_STARTED';
export const DELETE_RESTAURANT_SUCCESS = 'DELETE_RESTAURANT_SUCCESS';
export const DELETE_RESTAURANT_FAILED = 'DELETE_RESTAURANT_FAILED';

export const deleteRestaurantStarted = () => ({
  type: DELETE_RESTAURANT_STARTED,
});
export const deleteRestaurantFailed = error => ({
  type: DELETE_RESTAURANT_FAILED,
  payload: error,
});
export const deleteRestaurantSuccess = data => ({
  type: DELETE_RESTAURANT_SUCCESS,
  payload: data,
});
