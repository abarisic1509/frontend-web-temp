const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const { execSync } = require("child_process");

const templatesDir = path.join(__dirname, "../templates");

const getCurrentFolderName = () => {
  return path.basename(process.cwd());
};

const questions = [
  {
    type: "input",
    name: "projectName",
    message:
      "What is your project name? (Type . to use the current folder name)",
    default: ".",
  },
  {
    type: "list",
    name: "framework",
    message: "Which framework would you like to use?",
    choices: ["React", "Next.js"],
  },
  {
    type: "list",
    name: "language",
    message: "Would you like to use TypeScript?",
    choices: ["JavaScript", "TypeScript"],
  },
  {
    type: "confirm",
    name: "useI18next",
    message: "Would you like to include i18next for internationalization?",
  },
];

async function generateTemplate() {
  const prompt = inquirer.createPromptModule();
  const answers = await prompt(questions);

  let projectName =
    answers.projectName === "." ? getCurrentFolderName() : answers.projectName;
  const { framework, language, useI18next } = answers;

  // Determine the path of the selected template
  const templatePath = path.join(
    templatesDir,
    framework.toLowerCase() === "react" ? "react" : "next",
    language.toLowerCase() === "javascript" ? "js" : "ts",
    useI18next ? "with-translation" : "base"
  );

  // Create the target directory if it doesn't exist
  const targetPath = path.join(process.cwd(), projectName);

  try {
    // Create the target directory
    await fs.ensureDir(targetPath);

    await fs.copy(templatePath, targetPath);
    console.log(
      `Template ${framework} ${language} ${
        useI18next ? "with i18next" : "without i18next"
      } ${
        includeComponents ? "and including predefined components" : ""
      } copied to ${projectName}`
    );

    // Change to the target directory
    process.chdir(targetPath);

    // Install dependencies
    execSync("npm install", { stdio: "inherit" });
    console.log("Dependencies installed successfully.");

    console.log(`Project ${projectName} setup completed!`);
  } catch (error) {
    console.error("Error generating template:", error.message);
  }
}

generateTemplate();
