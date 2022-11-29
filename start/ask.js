// *-------------Collecting Info with Readline--------------*

//name of the file as a module
const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do? "
];

collectAnswers(questions, (answers) =>{
    console.log("Thannk you for your answers!");
    console.log(answers);
    process.exit();
});