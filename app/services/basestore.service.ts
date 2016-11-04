import * as angular from 'angular';
import {INgRedux} from 'ng-redux';
import {IScope} from 'angular';
import {IRootReducer} from '../reducers/index';

export abstract class BaseStoreService {
  abstract mapDispatchToThis():any;
  abstract mapStateToThis(state:IRootReducer):any;

  public static $inject = ['$ngRedux'];
  protected store:any = {};

  public constructor(protected $ngRedux:INgRedux) {
    this.store = {};
  }

  /**
   * Connect to the store and set everything up
   * This needs to be outside of the constructor to make sure everything is ready
   */
  public init() {
    this._connectToStore(this.mapDispatchToThis());
  }

  /**
   * Set up a watcher to update the local variables when the store changes
   * @param scope
   * @param target
   * @param bindings
   */
  public registerServiceBindings(scope:IScope, target:any, bindings:any):void {
    Object.keys(bindings).map((key) => {
      scope.$watch(() => {
        return this.store[bindings[key]];
      }, (newValue) => {
        target[key] = newValue;
      });
    });
  }

  /**
   * Copy the store data and actions to the local variables
   * @param actions
   * @private
   */
  protected _connectToStore(actions:Object) {
    this.$ngRedux.connect(this.mapStateToThis, actions)(this.store);
  }
}
