import * as angular from 'angular';
import { IModule } from 'angular';
import {MenuComponent} from './menu.component';
import {MenuController} from './menu.controller';


export class MenuModule {
    public name:string = 'menu.module';
    private _app:IModule;

    constructor() {
        this._app = angular.module(this.name, []);
        this._init();
    }

    private _init() {
        this._app.component(MenuComponent.id, new MenuComponent());
        this._app.controller(MenuController.id, MenuController);
    }
}
