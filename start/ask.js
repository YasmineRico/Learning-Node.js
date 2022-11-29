// *-------------Collecting Info with Readline--------------*

//readline is a wrapper for stdin/stdout 
const readline = require("readline");

//create interface for stdin/stdout wrapper readline
const rl = readline.createInterface({
    input: process.stdin, //maps to process standard input
    output: process.stdout //maps to process standard output
});

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do? "
];

function collectAnswers(questions, done){
    const answers = [];

    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        if(answers.length < questions.length){
            rl.question(
                questions [answers.length],
                questionAnswered
            );
        } else{
            return done(answers);
        }
    };
    rl.question(questions[0], questionAnswered);
}
collectAnswers(questions, (answers) =>{
    console.log("Thannk you for your answers!");
    console.log(answers);
    process.exit();
});