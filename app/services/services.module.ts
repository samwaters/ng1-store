import * as angular from 'angular';
import { IModule } from  'angular';
import {HelloService} from './hello.service';
import {MenuService} from './menu.service';
export class ServicesModule {
  public name:string = 'services.module';
  private _app:IModule;

  constructor() {
    this._app = angular.module(this.name, []);
    this.init();
  }

  private init() {
    this._app.service(HelloService.id, HelloService);
    this._app.service(MenuService.id, MenuService);
  }
}
