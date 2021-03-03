// JavaScript Document
$ (document).ready(function() {	
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Of course!" , "You betcha!", "It is undoubtedly so!", "Yes! High five!", "Hmmm...not lookin' good.", 
"Please repeat the question.", "Out to lunch... try again later.", "Not feelin' it Babe!", "Nope!", "Most definitely not."];
	$("#answer").hide();

var askMeAnything = function() {
	$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout(
		function() {
	var question = prompt ("Ask A YES/NO QUESTION");
$("#8ball").effect("shake");
magic8Ball.askAQuestion(question);
}, 1000);
};
magic8Ball.askAQuestion = function (question) 
{
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberFromListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor (randomNumberFromListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];
	console.log (question);
	console.log (answer);
	$("#answer").text(answer);
};
$("#questionButton").click(askMeAnything);
	
});