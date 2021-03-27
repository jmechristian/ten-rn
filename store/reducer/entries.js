import { GET_ENTRIES, SET_LOADING } from '../actions/entries';

const initialState = {
  entries: [],
  loading: false,
};

export const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
