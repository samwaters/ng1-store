import IComponentOptions = angular.IComponentOptions;
import {GreetingController} from './greeting.controller';

export class GreetingComponent implements IComponentOptions {
  public static id:string = 'greetingComponent';
  public bindings:any;
  public controller:string;
  public controllerAs:string;
  public templateUrl:string;

  constructor() {
    this.bindings = {
      greeting: '<',
      toggle: '<'
    };
    this.controller = GreetingController.id;
    this.controllerAs = 'vm';
    this.templateUrl = 'app/components/GreetingComponent/greeting.tmpl.html';
  }
}