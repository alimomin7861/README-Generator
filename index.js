// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: [{name: 'Mozilla Public License 2.0', value:'MPL_2.0'}, 'MIT', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('README.md created successfully!');
    }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("generatedREADME.md",generateMarkdown(answers));
    })
}

// Function call to initialize app
init();



