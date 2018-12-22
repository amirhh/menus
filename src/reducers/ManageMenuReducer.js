import { MANAGE_MENU_DATA, RESET_MENU } from '../actions';

const INITIAL_STATE = {
  parent2: false,
  parent2Data: [],
  parent3: false,
  parent3Data: [],
  parent4: false,
  parent4Data: [],
  level: [
    { id: undefined },
    { id: null },
    { id: null },
    { id: null },
    { id: null },
  ]
};

export default (state = INITIAL_STATE, action) => {
  const { lvl, item, id } = action;
  if (action.type === MANAGE_MENU_DATA && item.children && item.children.length > 0) {
    switch (lvl) {
      case 1:
        let logic2 = state.level[lvl].id === id || !state.level[lvl].id ? logic2 = !state.parent2 : logic2 = state.parent2;
        state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
        state.level[2].id = null;
        state.level[3].id = null;
        state.level[4].id = null;
        return {
          level: state.level,
          parent2: logic2,
          parent2Data: item.children,
          parent3: false,
          parent3Data: [],
          parent4: false,
          parent4Data: [],
        }

      case 2:
        let logic3 = state.level[lvl].id === id || !state.level[lvl].id ? logic3 = !state.parent3 : logic3 = state.parent3;
        state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
        state.level[3].id = null;
        state.level[4].id = null;
        return {
          level: state.level,
          parent2: state.parent2,
          parent2Data: state.parent2Data,
          parent3: logic3,
          parent3Data: item.children,
          parent4: false,
          parent4Data: [],
        }

      case 3:
        let logic4 = state.level[lvl].id === id || !state.level[lvl].id ? logic4 = !state.parent4 : logic4 = state.parent4;
        state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
        state.level[4].id = null;
        return {
          level: state.level,
          parent2: state.parent2,
          parent2Data: state.parent2Data,
          parent3: state.parent3,
          parent3Data: state.parent3Data,
          parent4: logic4,
          parent4Data: item.children
        }

      case 4:
        state.level[lvl].id === id ? state.level[lvl].id = null : state.level[lvl].id = id;
        return {
          level: state.level,
          parent2: state.parent2,
          parent2Data: state.parent2Data,
          parent3: state.parent3,
          parent3Data: state.parent3Data,
          parent4: state.parent4,
          parent4Data: state.parent4Data
        }

      default:
        break;
    }
  } else if (action.type === RESET_MENU) {
    state.level[1].id = null;
    state.level[2].id = null;
    state.level[3].id = null;
    state.level[4].id = null;
    state = INITIAL_STATE;
    return state;
  } else {
    return state;
  }
}