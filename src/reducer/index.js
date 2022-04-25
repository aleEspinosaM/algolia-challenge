import * as actions from './../actions';
import { API_STATUS } from '../constants';

export const initialState = {
  isDeletingMessage: API_STATUS.IDLE,
  deletedId: null,
  refresh: false,
};

export default function rootReducer(state, { type, payload }) {
  switch (type) {
    case actions.DELETE_RESTAURANT_STARTED:
      return {
        ...state,
        isDeletingMessage: API_STATUS.PENDING,
      };
    case actions.DELETE_RESTAURANT_SUCCESS:
      return {
        ...state,
        isDeletingMessage: API_STATUS.RESOLVED,
        deletedId: payload.objectID,
      };
    default:
      return { ...state };
  }
}
