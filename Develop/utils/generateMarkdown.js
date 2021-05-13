// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === "none" ? "" : `![github license](https://img.shields.io/badge/license-${license}-red)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === "none" ? "" : `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === "none" ? "" : `## License
  This project is licensed under ${license} `



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseSection(data.license)}  ${renderLicenseBadge(data.license)}

- [Descrition](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Credits](#credits)
- [Questions](#questions)
${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation

${data.installation}

## Usage

${data.info}

## Test

${data.test}

# Credits

## Contribution Guidelines

${data.contribution}

## Questions

${data.email}

${data.github}
 
  


`;

}

module.exports = generateMarkdown;
