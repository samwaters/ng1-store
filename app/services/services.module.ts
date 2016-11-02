import IModule = angular.IModule;
import {HelloService} from './hello.service';
export class ServicesModule {
  public name:string = 'services.module';
  private _app:IModule;

  constructor() {
    this._app = angular.module(this.name, []);
    this.init();
  }

  private init() {
    this._app.service(HelloService.id, HelloService);
  }
}
