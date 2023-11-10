// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "gpl-3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "isc":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "mit":
      return "[Link to Liscense information](https://choosealicense.com/licenses/mit/)";
    case "gpl-3.0":
      return "[Link to Liscense information](https://choosealicense.com/licenses/gpl-3.0/)";
    case "apache-2.0":
      return "[Link to Liscense information](https://choosealicense.com/licenses/apache-2.0/)";
    case "isc":
      return "[Link to Liscense information](https://choosealicense.com/licenses/isc/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "mit":
      return "This repo is covered by an MIT license";
    case "gpl-3.0":
      return "This repo is covered by a GNU General Public License v3.0";
    case "apache-2.0":
      return "This repo is covered by an Apache License 2.0";
    case "isc":
      return "This repo is covered by an ISC license";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title} ${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage Information](#usage)
- [Contribution Guidelines](#contribution)
- [Testing Instructions](#tests)
- [License Information](#license)
- [Contact info for Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
${licenseSection}
${licenseLink}

## Questions
[Github Profile: https://github.com/${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
