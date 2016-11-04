export class MenuActions {
  public static id = 'menu.actions';
  public static actions = {
    LOAD_MENU: 'LOAD_MENU',
    UPDATE_BRAND: 'UPDATE_BRAND',
    UPDATE_MENU: 'UPDATE_MENU',
    STORE_MENU: 'STORE_MENU'
  };

  public loadMenu() {
    return (dispatch) => {
      dispatch({
        type: MenuActions.actions.LOAD_MENU
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
