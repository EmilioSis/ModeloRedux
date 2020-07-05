import React from 'react';
import {Provider} from 'react-redux';
import Home from './home';

import {store} from '../redux/index';

const pages = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default pages;
