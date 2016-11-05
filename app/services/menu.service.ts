import {BaseStoreService} from './basestore.service';
import {IRootReducer} from '../reducers/index';
import {INgRedux} from 'ng-redux';
import {MenuActions} from '../actions/menu.actions';

export class MenuService extends BaseStoreService {
  public static id = 'menu.service';
  public static $inject = ['$ngRedux', '$http', MenuActions.id];

  public constructor(protected $ngRedux:INgRedux, private $http, private menuActions:MenuActions) {
    super($ngRedux);
    this.init();
  }

  public get brandName():string {
    return this.store.menu.brandName;
  }

  public get isLoaded():boolean {
    return this.store.menu.isLoaded;
  }

  public get isLoading():boolean {
    return this.store.menu.isLoading;
  }

  public get leftMenu():Object {
    return this.store.menu.leftItems;
  }

  public get rightMenu():Object {
    return this.store.menu.rightItems;
  }

  public mapStateToThis(state:IRootReducer) {
    return {
      menu: state.menu
    };
  }

  public mapDispatchToThis() {
    return {
      addItem: this.menuActions.addItem,
      loadMenu: this.menuActions.loadMenu,
      removeItem: this.menuActions.removeItem,
      storeMenu: this.menuActions.storeMenu,
      updateBrand: this.menuActions.updateBrand,
      updateMenu: this.menuActions.updateMenu
    };
  }

  // PROXY METHODS
  public addItem(side:string) {
    this.store.addItem(side);
  }

  public loadMenu() {
    this.store.loadMenu();
    this.$http({
      method: 'GET',
      url: 'app/data/menu.json'
    }).then((data) => {
      this.store.storeMenu(data.data);
    });
  }

  public removeItem(id:string) {
    this.store.removeItem(id);
  }

  public updateBrand(value:string) {
    this.store.updateBrand(value);
  }

  public updateMenu(id:string, field:string, value:string) {
    this.store.updateMenu(id, field, value);
  }
}
