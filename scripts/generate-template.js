#!/usr/bin/env node
import inquirer from "inquirer";
import * as fs from "fs-extra";
import * as path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

// Convert `import.meta.url` to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  /* {
    type: "confirm",
    name: "includeComponents",
    message: "Would you like to include predefined components?",
  }, */
];

async function generateTemplate() {
  const prompt = inquirer.createPromptModule();
  const answers = await prompt(questions);

  let projectName = answers.projectName === "." ? "" : answers.projectName;
  const {
    framework,
    language,
    useI18next,
    /* includeComponents */
  } = answers;

  // Determine the path of the selected template
  const templatePath = path.join(
    templatesDir,
    framework.toLowerCase() === "react" ? "react" : "next",
    language.toLowerCase() === "javascript" ? "js" : "ts",
    useI18next ? "with-translation" : "base"
  );

  const componentsPath = path.join(
    templatesDir,
    `${framework.toLowerCase() === "react" ? "react" : "next"}/${
      language.toLowerCase() === "javascript" ? "js" : "ts"
    }`,
    "components"
  );

  const targetPath = projectName
    ? path.join(process.cwd(), projectName)
    : process.cwd();

  try {
    // Only create the target directory if projectName is not '.'
    if (projectName) {
      await fs.ensureDir(targetPath);
    }

    await fs.copy(templatePath, targetPath);

    // If components are included, copy the components folder separately
    /*  if (includeComponents) {
      const targetComponentsPath = path.join(
        targetPath,
        framework.toLowerCase() === "react"
          ? "src/ui/components"
          : "ui/components"
      );
      await fs.ensureDir(path.dirname(targetComponentsPath)); // Ensure the directory exists
      await fs.copy(componentsPath, targetComponentsPath);
      console.log("Predefined components included.");
    } */

    console.log(
      `Template ${framework} ${language} ${
        useI18next ? "with i18next" : ""
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
