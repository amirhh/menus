import { MANAGE_ACTIVE_SUBMENU } from '../actions';

const INITIAL_STATE = {
  level : [
    {id:undefined},
    {id:null},
    {id:null},
    {id:null},
    {id:null},
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MANAGE_ACTIVE_SUBMENU:
      const {lvl, id} = action;
      switch (lvl) {
        case 1:
          state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
          state.level[2].id = null;
          state.level[3].id = null;
          state.level[4].id = null;
          return state;

        case 2:
          state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
          state.level[3].id = null;
          state.level[4].id = null;
          return state;

        case 3:
          state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
          state.level[4].id = null;
          return state;
          
        case 4:
          state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
          return state; 
      
        default:
          return state;
      }
      
  }
  return state;
}