(function(){
    
    // angular is angular's god object

    // the module method lets us define modules (clusters of related functions)
    // the empty array is needed to instanciate a blank module
    var app = angular.module("gitViewer", []);
    
    var MainCtrl = function($scope, $http) {
        // $scope and $http are objects defined by angular. $scope tells us what's available for bindings
        // and http lets us make AJAX requests to remote resources

        // a simple binding to anything called {{message}} in MainCtrl ng-controller block of the html
        $scope.message = "Prepare for Angular Magic!!!"

        // -- define behaviours
        var onResponse1 = function(resp) {
            $scope.user1 = resp.data;
            $http.get($scope.user1.repos_url)
                 .then(onRepos1, onError);
        };

        var onResponse2 = function(resp) {
            $scope.user2 = resp.data;
            $http.get($scope.user2.repos_url)
                 .then(onRepos2, onError);
        };

        var onRepos1 = function(resp) {
            $scope.repos1 = resp.data;
        }

        var onRepos2 = function(resp) {
            $scope.repos2 = resp.data;
        }

        var onError = function(err) {
            $scope.error = "No such data, we're fucked :(";
        };

        $scope.search1 = function(username) {
            // -- invoke our webservice, similar to HttpClient use .then callback instead of await/async pattern
            $http.get("https://api.github.com/users/" + username)
                 .then(onResponse1, onError);
        }

        $scope.search2 = function(username) {
            // -- invoke our webservice, similar to HttpClient use .then callback instead of await/async pattern
            $http.get("https://api.github.com/users/" + username)
                 .then(onResponse2, onError);
        }

        $scope.repo1SortOrder = "-stargazers_count"
        $scope.repo2SortOrder = "-stargazers_count"
    };

    // after contoller definition, dump it in our module
    app.controller("MainCtrl", MainCtrl);

    // manual controller definition for user with minifier
    //app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);
}());