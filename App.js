import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { formReducer } from './store/reducer/form';
import { entriesReducer } from './store/reducer/entries';

const rootReducer = combineReducers({
  form: formReducer,
  entries: entriesReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
