import IComponentOptions = angular.IComponentOptions;
import {GreetingControlController} from './greetingcontrol.controller';

export class GreetingControlComponent implements IComponentOptions {
  public static id:string = 'greetingControlComponent';
  public bindings:any;
  public controller:string;
  public controllerAs:string;
  public templateUrl:string;

  constructor() {
    this.bindings = {
      refresh: '&',
      toggle: '='
    };
    this.controller = GreetingControlController.id;
    this.controllerAs = 'vm';
    this.templateUrl = 'app/components/GreetingControlComponent/greetingcontrol.tmpl.html';
  }
}