export const UPDATE_VALUE = 'UPDATE_VALUE';
export const UPDATE_SWITCH = 'UPDATE_SWITCH';

export const updateValue = (target, value) => {
  return {
    type: UPDATE_VALUE,
    target,
    value,
  };
};

export const updateSwitch = (target, value) => {
  return {
    type: UPDATE_SWITCH,
    target,
    value,
  };
};
