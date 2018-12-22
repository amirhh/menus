import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import ManageMenuReducer from './ManageMenuReducer';
export default combineReducers({
  home: HomeReducer,
  ManageMenuReducer
});
