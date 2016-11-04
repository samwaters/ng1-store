import {MenuEditorController} from './menueditor.controller';
import IComponentOptions = angular.IComponentOptions;

export class MenuEditorComponent implements IComponentOptions {
    public static id:string = 'menuEditorComponent';
    public controller:string;
    public controllerAs:string;
    public templateUrl:string;

    constructor() {
        this.controller = MenuEditorController.id;
        this.controllerAs = 'vm';
        this.templateUrl = 'app/components/MenuEditorComponent/menueditor.tmpl.html';
    }
}
