import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import ManageMenuReducer from './ManageMenuReducer';
import ManageActiveReducer from './ManageActiveReducer'
export default combineReducers({
  home: HomeReducer,
  ManageMenuReducer,
  actives : ManageActiveReducer
});
