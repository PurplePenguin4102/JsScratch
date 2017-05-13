(function(){
    
    // angular is angular's god object

    // the module method lets us define modules (clusters of related functions)
    // the empty array is needed to instanciate a blank module
    var app = angular.module("gitViewer", []);
    
    var MainCtrl = function($scope, $http) {
        // $scope and $http are objects defined by angular. $scope tells us what's available for bindings
        // and http lets us make AJAX requests to remote resources

        // -- define behaviours
        var onResponse = function(resp) {
            $scope.user = resp.data;
        };

        var onError = function(err) {
            $scope.error = "No such user exists :(";
        };

        // -- invoke our webservice, similar to HttpClient use .then callback instead of await/async pattern
        $http.get("https://api.github.com/users/purplepenguin4102")
             .then(onResponse, onError);
    };

    // after contoller definition, dump it in our module
    app.controller("MainCtrl", MainCtrl);

    // manual controller definition for user with minifier
    //app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);
}());