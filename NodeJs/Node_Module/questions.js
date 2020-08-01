const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

const answersEvent = collectAnswers(questions);

answersEvent.on("answer", answer =>{
    console.log(`Question answered: ${answer}`);
});

answersEvent.on("complete", answers => {
    console.log("Thank you for you answers. ");
    console.log(answers);

    process.exit();
});

answersEvent.on("complete", ()=>process.exit());