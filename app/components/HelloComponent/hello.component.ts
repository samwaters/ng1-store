import {HelloController} from './hello.controller';
import IComponentOptions = angular.IComponentOptions;

export class HelloComponent implements IComponentOptions {
  public static id:string = 'helloComponent';
  public controller:string;
  public controllerAs:string;
  public templateUrl:string;

  constructor() {
    this.controller = HelloController.id;
    this.controllerAs = 'vm';
    this.templateUrl = 'app/components/HelloComponent/hello.tmpl.html';
  }
}
