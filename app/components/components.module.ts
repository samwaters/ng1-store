import * as angular from 'angular';
import {HelloModule} from './HelloComponent/hello.module';
import {MenuModule} from './MenuComponent/menu.module';
import {MenuEditorModule} from './MenuEditorComponent/menueditor.module';
import {GreetingModule} from './GreetingComponent/greeting.module';

export class ComponentsModule {
  public name:string = 'components-module';

  constructor() {
    angular.module(this.name, [
      new HelloModule().name,
      new MenuModule().name,
      new MenuEditorModule().name,
      new GreetingModule().name
    ]);
  }
}
