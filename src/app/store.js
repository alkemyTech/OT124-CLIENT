import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from "redux-thunk";

// thunk works as middleware to asyncs petitions
//
var store = createStore(reducer, applyMiddleware(thunk))


export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
