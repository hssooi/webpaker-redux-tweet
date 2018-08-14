import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/post';

export default function configurePostStore() {
  const store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}