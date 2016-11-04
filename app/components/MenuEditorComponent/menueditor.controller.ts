import {MenuService} from '../../services/menu.service';
import * as _ from 'lodash';
require('./menueditor.scss');

export class MenuEditorController {
  public static id:string = 'menueditor.controller';
  public static $inject = ['$scope', MenuService.id];

  public brand:Function;
  public keyUp:Function;

  constructor($scope, private menuService) {
    this.menuService.registerServiceBindings($scope, this, {'menu':'menu'});
    this.brand = _.throttle((event) => {
      this.menuService.updateBrand(event.target.value);
    }, 250);
    this.keyUp = _.throttle((item, event, field) => {
      this.menuService.updateMenu(item.id, field, event.target.value);
    }, 250);
  }

  public checkbox(item, event) {
    this.menuService.updateMenu(item.id, 'show', event.target.checked);
  }
}
