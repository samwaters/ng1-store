require('./greetingcontrol.scss');

export class GreetingControlController {
  public static id:string = 'greetingcontrol.controller';

  public refresh:Function; // Bound property
  public toggle:number; // Bound property
}