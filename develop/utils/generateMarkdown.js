// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadgeUrls = {
      'GNU AGPLv3': 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
      'GNU GPLv3': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      'GNU LGPLv3': 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
      'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
      'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
      'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  };
  
  
  if (license in licenseBadgeUrls) {
      
      return `![License](${licenseBadgeUrls[license]})`;
  } else {
      
      return '';
  }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    const licenseUrls = {
      'GNU AGPLv3': 'https://www.gnu.org/licenses/agpl-3.0',
      'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'GNU LGPLv3': 'https://www.gnu.org/licenses/lgpl-3.0',
      'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
      'Apache License 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      'MIT License': 'https://opensource.org/licenses/MIT',
      'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
      'The Unlicense': 'https://unlicense.org/',
  };
  
  
  if (license in licenseUrls) {
      
      return `[${license}](${licenseUrls[license]})`;
  } else {
      
      return '';
  }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `
  ## License
  
  This project is licensed under the ${license} - see the [LICENSE](${renderLicenseLink(license)}) file for details.`;
  }
  // If there is no license, return an empty strings
  return '';
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    // Generate the license badge, if applicable
    const licenseBadge = renderLicenseBadge(data.license);
  
    // Create the README content with the provided data
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any questions, feel free to reach out to me via GitHub or email:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.address}
  `;
  }
  
  module.exports = generateMarkdown;
  