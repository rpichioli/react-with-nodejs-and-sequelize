import { combineReducers } from 'redux';
// Actions
import bands from './bands';

// Used as a single reducer to create the Redux store
export default combineReducers({ bands });
