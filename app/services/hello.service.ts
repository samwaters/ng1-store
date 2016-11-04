import {BaseStoreService} from './basestore.service';
import {IRootReducer} from '../reducers/index';
import {HelloActions} from '../actions/hello.actions';
import {INgRedux} from 'ng-redux';
export class HelloService extends BaseStoreService {
  public static id = 'hello.service';
  public static $inject = ['$ngRedux', HelloActions.id];

  public constructor(protected $ngRedux:INgRedux, private helloActions:HelloActions) {
    super($ngRedux);
    this.init();
  }

  public get greeting():Object {
    return this.store.hello.greeting;
  }

  public mapStateToThis(state:IRootReducer) {
    return {
      hello: state.hello
    };
  }

  public mapDispatchToThis() {
    return {
      updateGreeting: this.helloActions.updateGreeting
    };
  }

  // PROXY METHODS
  public updateGreeting(greeting:string) {
    this.store.updateGreeting(greeting);
  }
}
