import {persistStore} from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persist';

import rootReducer from './modules/rootReducers';
// eslint-disable-next-line no-undef

const store = createStore(persistReducers(rootReducer));
const persistor = persistStore(store);

export {store, persistor};
