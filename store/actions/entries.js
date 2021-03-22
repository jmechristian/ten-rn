import axios from 'axios';

export const GET_ENTRIES = 'GET_ENTRIES';

export const getEntries = () => {
  return async (dispatch) => {
    try {
      await axios
        .get('https://step-ten-server.herokuapp.com/api/entries/all')
        .then((response) => {
          dispatch({ type: GET_ENTRIES, payload: response.data.entries });
        });
    } catch (err) {
      console.log(err);
    }
  };
};
