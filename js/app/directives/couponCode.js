function couponCode() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$validators.code = function(code) {
        debugger
        return (/\d{2}[a-z]{4}\d{2}/).test(code);
      }
    }
  }
}

angular
	.module('app')
	.directive('couponCode', couponCode);
