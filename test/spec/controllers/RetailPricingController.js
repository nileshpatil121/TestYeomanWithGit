'use strict';

describe('Controller: RetailPricingController', function () {

  // load the controller's module
  beforeEach(module('mytodo2App'));

  var MainCtrl,
		retailServiceG,
    scope,
	retailService;
	

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$serviceProvider) {
    scope = $rootScope.$new();
    MainCtrl = $controller('retailPricingCtrl', {
      $scope: scope
    });	
  }));

  it('should attach a list of awesomeThings to the scope', inject(function(retailService)  {
    expect(scope.searchKeywords).to.equal('nilesh');
  });
  
  /*it('should attach a list of awesomeThings to the scope',
	  inject(function(retailService) {

		expect(retailService.getData().length).toBe(10);
	}));*/
  
});
