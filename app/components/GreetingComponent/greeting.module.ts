import * as angular from 'angular';
import { IModule } from 'angular';
import {GreetingComponent} from './greeting.component';
import {GreetingController} from './greeting.controller';

export class GreetingModule {
  public name:string = 'greeting.module';
  private _app:IModule;

  constructor() {
    this._app = angular.module(this.name, []);
    this._init();
  }

  private _init() {
    this._app.component(GreetingComponent.id, new GreetingComponent());
    this._app.controller(GreetingController.id, GreetingController);
  }
}
