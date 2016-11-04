/// <reference path="./app.d.ts" />
import * as angular from 'angular';
import {ComponentsModule} from './components/components.module';
import {ServicesModule} from './services/services.module';

angular.module('ng1-store', [
  new ComponentsModule().name,
  new ServicesModule().name,
  'ui.bootstrap'
]);

