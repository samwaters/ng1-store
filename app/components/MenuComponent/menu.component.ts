import IComponentOptions = angular.IComponentOptions;
import {MenuController} from './menu.controller';

export class MenuComponent implements IComponentOptions {
    public static id:string = 'menuComponent';
    public controller:string;
    public controllerAs:string;
    public templateUrl:string;

    constructor() {
        this.controller = MenuController.id;
        this.controllerAs = 'vm';
        this.templateUrl = 'app/components/MenuComponent/menu.tmpl.html';
    }
}
