import {MenuService} from '../../services/menu.service';
require('./menueditor.scss');

export class MenuEditorController {
  public static id:string = 'menueditor.controller';
  public static $inject = ['$scope', MenuService.id];

  constructor($scope, private menuService) {
    this.menuService.registerServiceBindings($scope, this, {'menu':'menu'});
  }

  public brand(event) {
    this.menuService.updateBrand(event.target.value);
  }

  public checkbox(item, event) {
    this.menuService.updateMenu(item.id, 'show', event.target.checked);
  }

  public keyUp(item, event, field) {
    this.menuService.updateMenu(item.id, field, event.target.value);
  }
}
