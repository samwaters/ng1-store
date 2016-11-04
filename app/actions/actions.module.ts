import * as angular from 'angular';
import {IModule} from 'angular';
import {HelloActions} from './hello.actions';

export class ActionsModule {
  public name:string = 'actions.module';
  private _app:IModule;

  public constructor() {
    this._app = angular.module(this.name, []);
    this._init();
  }

  private _init() {
    this._app.service(HelloActions.id, HelloActions);
  }
}
