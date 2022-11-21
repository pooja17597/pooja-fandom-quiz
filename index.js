var readlineSync = require('readline-sync');
var score = 0;
var username = readlineSync.question("What is your name? ");
console.log("Welcome, " + username + ". Nice to meet you.");

console.log("Type only lowercase/small letters or numbers.");

function play(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer === answer) {
    console.log("Great! you are right.");
    score = score + 1;
  } else {
    console.log("Oops, you are wrong.")
  }
  console.log("Your current score is: " + score);
  console.log("*********")
}

var q1 = {
  question: "Which comedy serial of SabTv channel is the longest running? ",
  answer: "tarak mehta ka ooltah chashmah"
}
var q2 = {
  question: "What is the real name of character Jethalal in TMKOC? ",
  answer: "dilip joshi"
}
var q3 = {
  question: "How many years did the serial TMKOC completed in year 2022? ",
  answer: "14"
}
var q4 = {
  question: "How many family members are there in Jethalal's family? ",
  answer: "4"
}
var q5 = {
  question: "What is the name of Jethalal's shop in serial? ",
  answer: "gada electronics"
}
var q6 = {
  question: "What is Jethalal's favourite sunday breakfast? ",
  answer: "jalebi fafda"
}

var qna = [q1, q2, q3, q4, q5, q6];
for (var i = 0; i < qna.length; i++) {
  var currentquestion = qna[i];
  play(currentquestion.question, currentquestion.answer);
}

console.log("Your final score is: " + score);
console.log("Highest score is: ");

console.log("Pooja = 6");
console.log("Manthan = 4");

console.log("Have you beaten the highest score? Share me the screenshot of your final score.")