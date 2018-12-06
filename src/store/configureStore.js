import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default function configureStore() {
  return createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(reduxThunk)));
}
