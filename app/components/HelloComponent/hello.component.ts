import {HelloController} from './hello.controller';
export class HelloComponent {
  public static id:string = 'helloComponent';
  public bindings:Object;
  public controller:string;
  public controllerAs:string;
  public templateUrl:string;

  constructor() {
    console.warn('dfd');
    this.bindings = {};
    this.controller = HelloController.id;
    this.controllerAs = 'vm';
    this.templateUrl = 'hello.tmpl.html';
  }
}
