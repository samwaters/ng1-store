import {HelloController} from './hello.controller';
export class HelloComponent {
  public static id:string = 'helloComponent';
  public bindings:Object;
  public controller:string;
  public controllerAs:string;
  public templateUrl:string;

  constructor() {
    this.bindings = {};
    this.controller = HelloController.id;
    this.controllerAs = 'vm';
    this.templateUrl = 'app/components/HelloComponent/hello.tmpl.html';
  }
}
