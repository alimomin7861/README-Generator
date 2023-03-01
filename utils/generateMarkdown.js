// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else {
    // use ` instead of "" when calling a piece of an object ${___}
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-green.svg)](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None"){
    return "";
  } else {
    return `- [License](#license)    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None"){
    return "";
  } else {
    return `## License
  This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(answers.license)}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${renderLicenseSection(answers.license)}

  ## Contribution
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  For any questions, please contact me using the information below:

  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
