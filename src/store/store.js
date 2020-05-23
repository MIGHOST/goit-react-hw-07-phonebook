import { combineReducers} from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import contactReducer from './reducer/contactReduce';
import filterReducer from './reducer/filterReducer';
import loaderReducer from './reducer/loaderReducer';
import errorReducer from './reducer/errorReducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer
});


const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), thunk]
  },

);

export default store;
