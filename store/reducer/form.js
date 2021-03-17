import { UPDATE_VALUE } from '../actions/form';

const initialState = {
  formData: {
    resentful: '',
    selfish: '',
    dishonest: '',
    fearful: '',
    obsessing: '',
    secrets: '',
    kind: '',
    harm: '',
    act: '',
  },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      const newForm = { ...state.formData };
      newForm[action.target] = action.value;
      return {
        ...state,
        formData: newForm,
      };
    default:
      return state;
  }
};
