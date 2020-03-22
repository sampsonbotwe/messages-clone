import React from 'react';

import {AppRegistry} from 'react-native';
import App from './src/App';

import {name as appName} from './app.json';
import rootReducer from './src/store/reducers';

import {createStore, applyMiddleware} from 'redux';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const myApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => myApp);
