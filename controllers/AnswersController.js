surveyBot.controller('AnswersCtrl', function AnswersCtrl($scope, SurveyFactory) {
    $scope.answers = SurveyFactory.answers;
    $scope.SurveyFactory = SurveyFactory;
});
