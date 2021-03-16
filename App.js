import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { formReducer } from './store/reducer/form';
import { entriesReducer } from './store/reducer/entries';

const rootReducer = combineReducers({
  form: formReducer,
  entries: entriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
