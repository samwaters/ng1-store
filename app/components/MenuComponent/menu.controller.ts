import {MenuService} from '../../services/menu.service';
require('./menu.scss');

export class MenuController {
    public static id:string = 'menu.controller';
    public static $inject = ['$scope', MenuService.id];

    constructor($scope, private menuService:MenuService) {
        menuService.registerServiceBindings($scope, this, {'menu':'menu'});
        menuService.loadMenu();
    }
}
