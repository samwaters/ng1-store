/// <reference path="./app.d.ts" />
import * as angular from 'angular';
import {ComponentsModule} from './components/components.module';
import {ServicesModule} from './services/services.module';
import {INgReduxProvider, ngRedux} from 'ng-redux';
import rootReducer from './reducers/index';
import * as createLogger from 'redux-logger';
import {ActionsModule} from './actions/actions.module';
import thunk from 'redux-thunk';

angular.module('ng1-store', [
  new ActionsModule().name,
  new ComponentsModule().name,
  new ServicesModule().name,
  'ui.bootstrap',
  'ngRedux'
]).config(['$ngReduxProvider', ($ngReduxProvider:INgReduxProvider) => {
  $ngReduxProvider.createStoreWith(
    rootReducer,
    [
      thunk,
      createLogger({
        collapsed: true,
        duration: true
      })
    ]
  );
}]);

