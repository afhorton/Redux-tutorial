import { createStore } from 'redux';
import counterReducer from './reducers.jsx';

const store = createStore(counterReducer);

export default store;