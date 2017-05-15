(function() {

    // define a function which returns an object that represents our service API
    var github = function($http) {

        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                        .then(function(response){
                            return response.data;
                        });
        };

        var getRepos = function(user){
            return $http.get(user.repos_url)
                        .then(function(response){
                            return response.data;
                        });
        };
        

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    // grab the module we are using
    var module = angular.module("gitViewer");
    
    // register the service with angular
    module.factory("github", github);

})();