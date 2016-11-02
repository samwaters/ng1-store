import {ComponentsModule} from './components/components.module';

angular.module('ng1-store', [
  new ComponentsModule().name,
  'ui.bootstrap'
]);

