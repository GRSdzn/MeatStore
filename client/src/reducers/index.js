import auth from './auth';
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  auth
});

export default rootReducer;
