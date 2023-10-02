// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// made title and description to be validated
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Title',
        validate: function (userInput) {
            if (!userInput) {
                return console.log("Please enter a title");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter a discription of your project",
        name: 'description',
        default: 'Description',
        validate: function (userInput) {
            if (!userInput) {
                return console.log("Please enter a description");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the installation process",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Describe the usage of your project",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What are the guidelines for contributing to your project?",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "Instructions for testing",
        name: 'test'
    },
    {
        type: 'list', 
        message: "Pick a license to add to your project",
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense'
        ],
        name: 'license'
    },
    //made username info validated
    {
        type: 'input',
        message: "What is your github username?",
        name: 'username',
        default: 'Username',
        validate: function (userInput) {
            if (!userInput) {
                return console.log("Please provide a username");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'address'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
     // Use inquirer to prompt the user with questions
     inquirer
     .prompt(questions)
     .then((answers) => {
         // Generate markdown content using user's answers
         const markdownContent = generateMarkdown(answers);

         // Write the README file
         writeToFile('README.md', markdownContent);
     })
     .catch((error) => {
         console.error(error);
     });
}

// Function call to initialize app
init();
