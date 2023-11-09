// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##Description
${data.title}

##Table of Contents
- [Installation](#installation)
- [Usage Information](#usage)
- [Contribution Guidelines](#contribution)
- [Testing Instructions](#tests)
- [License Information](#license)
- [Contact info for Questions](#questions)

##Installation
${answers.installation}

##Usage
${answers.usage}

##Contribution
${answers.contribution}

##Tests
${answers.tests
}
##License

##Questions
[Github Profile: https://github.com/${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
