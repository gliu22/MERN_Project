const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const collectAnswers = (questions, done) =>{
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