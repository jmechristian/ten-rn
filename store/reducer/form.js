import { UPDATE_VALUE, UPDATE_SWITCH, CLEAR_STATE } from '../actions/form';

const initialState = {
  formData: {
    resentful: '',
    selfish: '',
    dishonest: '',
    fearful: '',
    obsessing: '',
    secrets: '',
    harm: '',
    act: '',
  },
  checklist: {
    meeting: false,
    meditated: false,
    fellowship: false,
    literature: false,
    pray: false,
    sponsor: false,
    another: false,
    helped: false,
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
    case UPDATE_SWITCH:
      const newChecklist = { ...state.checklist };
      newChecklist[action.target] = !action.value;
      return {
        ...state,
        checklist: newChecklist,
      };
    case CLEAR_STATE:
      return {
        ...state,
        formData: initialState.formData,
        checklist: initialState.checklist,
      };
    default:
      return state;
  }
};
