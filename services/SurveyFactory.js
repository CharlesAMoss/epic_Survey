surveyBot.factory('SurveyFactory', function SurveyFactory() {
    var factory = {};
    factory.answers = [];

    factory.addAnswer = function() {
        var answer = {star: factory.star, sweet: factory.sweet};
        factory.answers.push(answer);
        factory.star = null;
        factory.sweet = null;
    console.log(factory.answers);
};
    return factory;
});
