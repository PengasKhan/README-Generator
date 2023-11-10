// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the application this README is for?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of the application repository",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the instructions for installing this application?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the guidelines for contributing to this repository?",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Write an example of how to run the tests included in the repository",
  },
  {
    type: "list",
    name: "license",
    message: "What license, if any, is this repository under?",
    choices: ["mit", "gpl-3.0", "apache-2.0", "isc"],
  },
  {
    type: "input",
    name: "github",
    message: "Include your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Lastly, is there an email you'd like to include?",
  },
];

// TODO: Create a function to write README file
function writeToFile(readme) {
  fs.writeFile("README.md", readme, (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile(markdown);
  });
}

// Function call to initialize app
init();
