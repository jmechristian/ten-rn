import { GET_ENTRIES } from '../actions/entries';

const initialState = {
  entries: [],
};

export const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRIES:
      return {
        ...state,
        entries: action.payload,
      };
    default:
      return state;
  }
};
