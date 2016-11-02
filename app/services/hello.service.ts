export class HelloService {
  public static id = 'hello.service';

  public constructor() {

  }

  public sayHello():Object {
    return {
      message: 'Hello ' + Math.floor(Math.random() * 100),
      timestamp: new Date().getTime()
    };
  }
}
