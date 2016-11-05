import * as angular from 'angular';
import { IModule } from 'angular';
import {GreetingControlComponent} from './greetingcontrol.component';
import {GreetingControlController} from './greetingcontrol.controller';

export class GreetingControlModule {
  public name:string = 'greetingcontrol.module';
  private _app:IModule;

  constructor() {
    this._app = angular.module(this.name, []);
    this._init();
  }

  private _init() {
    this._app.component(GreetingControlComponent.id, new GreetingControlComponent());
    this._app.controller(GreetingControlController.id, GreetingControlController);
  }
}