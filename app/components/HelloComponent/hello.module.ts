import IModule = angular.IModule;
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
    console.warn('Kaided', HelloComponent.id, HelloController.id);
    // this._app.component(HelloComponent.id, new HelloComponent());
    this._app.component('helloComponent', {
      templateUrl: 'hello.tmpl.html',
      controller: HelloController
    });
    this._app.controller(HelloController.id, HelloController);
  }
}
