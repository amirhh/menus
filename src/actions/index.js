//__TYPES__
export const FETCH_MENU = 'FETCH_MENU';
export const MANAGE_MENU_DATA = ' MANAGE_MENU_DATA';
export const MANAGE_ACTIVE_SUBMENU = ' MANAGE_ACTIVE_SUBMENU';
export const RESET_MENU = ' RESET_MENU';

export function fetchMenu() {
  return function (dispatch) {
    dispatch({
      type: FETCH_MENU,
      payload: data
    });
  }
}

export const manage_menu = (lvl, item,id) => ({
  type: MANAGE_MENU_DATA,
  lvl,
  item,
  id
})

export const manage_active = (lvl, id) => ({
  type: MANAGE_ACTIVE_SUBMENU,
  lvl,
  id
})

export const reset_menu = () => ({
  type: RESET_MENU
})