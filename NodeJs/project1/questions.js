// process.stdout.write("Hello ");
// process.stdout.write("World \n\n\n");

// Although using const to define functions seems like a hack, but it comes with some great advantages that make it superior (in my opinion)

// 1. It makes the function immutable, so you don't have to worry about that function being changed by some other piece of code.

// 2. You can use fat arrow syntax, which is shorter & cleaner.

// 3. Using arrow functions takes care of this binding for you.

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];
const answers = [];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

process.stdin.on('data', data=>{
    answers.push(data.toString().trim());

    if (answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
});

process.on('exit', ()=>{
    const[name, activity, programmingLanguage] = answers;

    console.log(`
    
    Thank you for your answer.

    Go ${activity} ${name} you can write ${programmingLanguage} later!!
    `);
});