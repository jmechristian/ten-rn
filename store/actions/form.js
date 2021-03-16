export const UPDATE_VALUE = 'UPDATE_VALUE';

export const updateValue = (target, value) => {
  return {
    type: UPDATE_VALUE,
    target,
    value,
  };
};
