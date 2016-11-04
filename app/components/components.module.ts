import * as angular from 'angular';
import {HelloModule} from './HelloComponent/hello.module';
import {MenuModule} from './MenuComponent/menu.module';

export class ComponentsModule {
  public name:string = 'components-module';

  constructor() {
    angular.module(this.name, [
      new HelloModule().name,
      new MenuModule().name
    ]);
  }
}
