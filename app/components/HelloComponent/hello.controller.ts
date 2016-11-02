export class HelloController {
  public static id:string = 'hello.controller';

  public static $inject = ['$scope'];
  constructor($scope) {
    $scope.singleModel = 0;
  }
}
