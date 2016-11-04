export class MenuActions {
  public static id = 'menu.actions';
  public static actions = {
    ADD_ITEM: 'ADD_ITEM',
    LOAD_MENU: 'LOAD_MENU',
    REMOVE_ITEM: 'REMOVE_ITEM',
    STORE_MENU: 'STORE_MENU',
    UPDATE_BRAND: 'UPDATE_BRAND',
    UPDATE_MENU: 'UPDATE_MENU'
  };

  public addItem(side) {
    return (dispatch) => {
      dispatch({
        type: MenuActions.actions.ADD_ITEM,
        payload: side
      });
    };
  }

  public loadMenu() {
    return (dispatch) => {
      dispatch({
        type: MenuActions.actions.LOAD_MENU
      });
    };
  }

  public removeItem(id) {
    return (dispatch) => {
      dispatch({
        type: MenuActions.actions.REMOVE_ITEM,
        payload: id
      });
    };
  }

  public storeMenu(menu:Object) {
    return (dispatch) => {
      dispatch({
        type: MenuActions.actions.STORE_MENU,
        payload: menu
      });
    };
  }

  public updateBrand(value:string) {
    return (dispatch) => {
      dispatch({
        type: MenuActions.actions.UPDATE_BRAND,
        payload: value
      });
    };
  }

  public updateMenu(id:string, field:string, value:string) {
    return(dispatch) => {
      dispatch({
        type: MenuActions.actions.UPDATE_MENU,
        payload: {
          id: id,
          field: field,
          value: value
        }
      });
    };
  }
}
