import {MenuService} from '../../services/menu.service';
import * as _ from 'lodash';
require('./menueditor.scss');

export class MenuEditorController {
  public static id:string = 'menueditor.controller';
  public static $inject = ['$scope', MenuService.id];

  public brand:Function;
  public keyUp:Function;

  constructor($scope, private menuService:MenuService) {
    this.menuService.registerServiceBindings($scope, this, {'menu':'menu'});
    this.brand = _.throttle((event) => {
      this.menuService.updateBrand(event.target.value);
    }, 250);
    this.keyUp = _.throttle((item, event, field) => {
      this.menuService.updateMenu(item.id, field, event.target.value);
    }, 250);
  }

  public addItem(side:string) {
    this.menuService.addItem(side);
  }

  public checkbox(item, event) {
    this.menuService.updateMenu(item.id, 'show', event.target.checked);
  }

  public remove(item) {
    this.menuService.removeItem(item.id);
  }

  public resetMenu() {
    this.menuService.loadMenu();
  }
}
