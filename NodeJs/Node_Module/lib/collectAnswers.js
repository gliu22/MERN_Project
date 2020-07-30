const readline = require("readline");
const { Module } = require("module");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

module.exports = (questions, done = f => f) =>{
    const answers = [];
    const [firstQuestion, secondQuestion, thirdQuestion] = questions;
    //done(answers);

    const questionAnswered = answer =>{
        answers.push(answer);

        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }else{
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
};