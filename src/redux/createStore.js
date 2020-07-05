import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

export default (reducers) => {
  const enhancer = composeWithDevTools();
  return createStore(reducers, enhancer);
};
