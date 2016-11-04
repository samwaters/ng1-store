export class MenuActions {
    public static id = 'menu.actions';
    public static actions = {
        LOAD_MENU: 'LOAD_MENU',
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
}
