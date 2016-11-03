import * as angular from 'angular';
import { IModule } from 'angular';
import {HelloComponent} from './hello.component';
import {HelloController} from './hello.controller';

export class HelloModule {
  public name:string = 'hello.module';
  private _app:IModule;

  constructor() {
    this._app = angular.module(this.name, []);
    this._init();
  }

  private _init() {
    this._app.component(HelloComponent.id, new HelloComponent());
    this._app.controller(HelloController.id, HelloController);
  }
}
