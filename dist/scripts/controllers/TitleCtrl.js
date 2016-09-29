(function() {
  function TitleCtrl($scope){

    $scope.home = "Home";
    $scope.aboutMe = "About Me";
    $scope.myProjects = "My Projects";
    $scope.contact = "Contact Me";
    $scope.displayTitle = "Welcome";

    $scope.changeHeader = function(name) {
      if (name === "Home") {
        $scope.displayTitle = "Home";
      } else {
        $scope.displayTitle = name;
      }
    };
  };

  angular
    .module('myApp')
    .controller('TitleCtrl', TitleCtrl);
})();
