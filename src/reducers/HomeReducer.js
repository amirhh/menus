import { FETCH_MENU } from '../actions';
import data from './../../public/data.json';
const INITIAL_STATE = {
  menus: data
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return action.payload;
  }
  return state;
}