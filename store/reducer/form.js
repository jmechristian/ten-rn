import { UPDATE_VALUE, UPDATE_SWITCH } from '../actions/form';

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
    default:
      return state;
  }
};
