/// <reference path="../typings/index.d.ts" />
import {ComponentsModule} from './components/components.module';
import {ServicesModule} from './services/services.module';

angular.module('ng1-store', [
  new ComponentsModule().name,
  new ServicesModule().name,
  'ui.bootstrap'
]);

