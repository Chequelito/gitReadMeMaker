// TODO: Include packages needed for this application
var inquirer = require("inquirer")
var fs = require("fs")
var path = require("path")
var generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    { type: "input", name: "title", message: "What do you want to title your project?" },
    { type: "input", name: "description", message: "How would you describe your project?" },
    { type: "input", name: "installation", message: "How do you install your project?" },
    { type: "input", name: "info", message: "What information would you like the user to know?" },
    { type: "input", name: "contribution", message: "What are the contribution guidelines?" },
    { type: "input", name: "test", message: "What are the test instructions?" },
    { type: "list", name: "license", message: "Is this project licensed?", choices: ["mit", "apache", "none"] }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile("README.md", generateMarkdown(answers))
    })

}

// Function call to initialize app
init();
