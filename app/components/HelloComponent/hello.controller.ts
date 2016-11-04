import {HelloService} from '../../services/hello.service';
require('./hello.scss');

export class HelloController {
  public static id:string = 'hello.controller';

  public static $inject = [HelloService.id];
  public greeting;
  public singleModel = 0;
  constructor(private helloService) {
    this.refreshGreeting();
  }

  public refreshGreeting() {
    this.greeting = this.helloService.sayHello();
  }
}
