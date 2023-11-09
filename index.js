// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the application this README is for?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of the application repository',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installing this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for contributing to this repository?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write an example of how to run the tests included in the repository',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license, if any, is this repository under?',
        choices: ['MIT', 'GNU 3.0', 'Apache 2.0', 'ISC' ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Include your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Lastly, is there an email you\'d like to include?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
