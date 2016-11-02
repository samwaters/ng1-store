import {ComponentsModule} from './components/components.module';

angular.module('ng1-store', [
  new ComponentsModule().name
]);

angular.bootstrap(document.getElementsByTagName('ng1-store')[0], ['ng1-store']);
