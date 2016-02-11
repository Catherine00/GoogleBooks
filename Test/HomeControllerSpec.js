describe('controller: HomeController', function() {
  var ctrl, foo, $scope;

  beforeEach(module('gboookApp'));
    beforeEach(module('serviceModule'));
    beforeEach(module('homeModule'));
    
  
  beforeEach(inject(function($rootScope, $controller) {
    bookservice = {
      fn: function() {}
    };
    
    //spyOn(bookservice, 'fn').andReturn("bookservice");
    
    $scope = $rootScope.$new();
    
    ctrl = $controller('HomeController', {$scope: $scope , bookservice: bookservice });
  }));
  
  it('scope should be available', function() {
  
    expect($scope.searchTerm).toBe("Angular JS");
  });
    

});

