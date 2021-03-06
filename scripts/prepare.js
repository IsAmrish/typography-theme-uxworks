const fs = require("fs-extra")
const chalk = require("chalk")

try {
  fs.ensureDirSync('./packages/typography-theme-uxworks', 0o2775)
  console.log(chalk.green('Successfully created'));
  try {
    fs.copySync('./package.json', './packages/typography-theme-uxworks/package.json')
    console.log(chalk.green('Successfully copied package.json'))
    try {
      fs.copySync('./README.md', './packages/typography-theme-uxworks/README.md')
      console.log(chalk.green('Successfully copied README.json'));
    } catch(err) {
      console.log(chalk.red(err));
    }
  } catch(err) {
    console.log(chalk.red(err));
  }
} catch(err) {
  console.log(chalk.red(err));
}
