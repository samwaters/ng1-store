import {HelloService} from '../../services/hello.service';
require('./hello.scss');

export class HelloController {
  public static id:string = 'hello.controller';

  public static $inject = ['$scope', HelloService.id];

  public toggle = 0;
  constructor($scope, private helloService) {
    this.helloService.registerServiceBindings($scope, this, {'hello':'hello'});
  }

  public refresh() {
    this.helloService.updateGreeting('Updated ' + new Date().getTime());
  }
}
