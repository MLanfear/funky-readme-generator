//Packages/Imports
const getFile = require("../index")


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license === "ISC License"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  else if (license === "Creative Commons Zero v1.0 Universal"){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
  }
  else if (license === "The Unliscense"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else 
  return license = " ";

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  switch (license){
    case "MIT License": 
      link = "https://opensource.org/licenses/MIT"
      break;
    case "Apache License 2.0":
      link = "https://opensource.org/licenses/Apache-2.0"
      break;
    case "ISC License":
      link = "https://opensource.org/licenses/ISC"
      break;
    case "Creative Commons Zero v1.0 Universal":
      link = "http://creativecommons.org/publicdomain/zero/1.0/"
      break;
    case "The Unliscense":
      link = "http://unlicense.org/"
      break;
      default: 
      link = "Link cannot be found"
  }

  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  console.log('renderLicenseSection licenseBadge',licenseBadge);
  const licenseLink = renderLicenseLink(license);
  console.log('renderLicenseSection licenseLink', licenseLink);
  if (license === undefined){
    return license = " ";
  } else {
    return `
# License
${licenseLink}`;
  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license)
return `# ${data.title} ${licenseBadge}
          
# Description
  
${data.description}
  
# Table of Contents
- [Installation](#installation)
- [Usage/Examples](#usage)
- [Contrubiting Guidelines](##contribution_guidelines)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
# Installation
  
${data.install}
  
# Usage
  
${data.usage}
  
# Contribution Guidelines
  
${data.contribute}
  
# Tests
  
${data.test}
# Questions
To see my Github page for further documentation, updates or other projects click [here](https://github.com/${data.githubUser}).
For further questions or inquaries reach out at ${data.email}
${licenseSection} `;
}
module.exports = generateMarkdown;