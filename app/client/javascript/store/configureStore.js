import { createStore } from 'redux';
import reducer from '../reducers/reducer';

export default function configureStore() {
    const store = createStore(reducer);
    return store;
}