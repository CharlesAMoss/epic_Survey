surveyBot.controller('ResultsCtrl', function ResultsCtrl($scope, SurveyFactory) {
    $scope.answers = SurveyFactory.answers;
    $scope.countResults = function(answers) {
        $scope.starAnswers = [];
        $scope.sweetAnswers = [];
        $scope.answers.forEach(function(answer) {
            $scope.starAnswers.push(answer.star);
            $scope.sweetAnswers.push(answer.sweet);
        });

        $scope.starAnswers = _.countBy($scope.starAnswers);
        $scope.sweetAnswers = _.countBy($scope.sweetAnswers);
    }
});
