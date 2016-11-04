import * as angular from 'angular';
import { IModule } from 'angular';
import {MenuEditorComponent} from './menueditor.component';
import {MenuEditorController} from './menueditor.controller';


export class MenuEditorModule {
    public name:string = 'menueditor.module';
    private _app:IModule;

    constructor() {
        this._app = angular.module(this.name, []);
        this._init();
    }

    private _init() {
        this._app.component(MenuEditorComponent.id, new MenuEditorComponent());
        this._app.controller(MenuEditorController.id, MenuEditorController);
    }
}
