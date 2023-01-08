// Necessary dependencies for this app
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// ARRAY CREATION
const questions = [
    {
        type: "input",
        message: "What is the title if your project/README",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of this README?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions for this project?",
        name: "install",
    },
    {
        type: "input",
        message: "What are the usage directions/information for this project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contributing guidelines?",
        name: "contribute",
    },
    {
        type: "input",
        message: "What are the test instructions for this project?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your Github username for feedback/questions?",
        name: "githubUser",
    },
    {
        type: "input",
        message: "What is your email address for questions on this project?",
        name: "email",
    },
    {
        type: "list",
        message: "Please choose which license(s) you used.",
        name: "license",
        choices: [
          "MIT License",
          "Apache License 2.0",
          "ISC License",
          "Creative Commons Zero v1.0 Universal",
          "The Unliscense",
          "GNU General Public License",
          "Mozilla Public License",
          "Boost Software License",
        ],
    },
];

// FUNCTION TO CREATE README
function writeToFile(fileName, data) {
    fs.writeFile("READMEexample.md", fileName, (err, data) => {
      err ? console.log(err) : console.log("Success!");
    });
};
// FUNCTION FOR INITIALIZATION 
function init(data) {
    inquirer.prompt(questions).then((data) => {
    
      console.log(data)
      writeToFile(generateMarkdown(data))
    });
}
// INITIALIZATION CALL
init();

module.exports = writeToFile;