import {HelloModule} from './HelloComponent/hello.module';
export class ComponentsModule {
  public name:string = 'components-module';

  constructor() {
    angular.module(this.name, [
      new HelloModule().name
    ]);
  }
}
