# Project Template Generator

This npm package helps you quickly set up a new project with predefined templates for React or Next.js, with options to use TypeScript, and include i18next for internationalization.

## IMPORTANT

This package is created for practice, as well for saving time on initial project setup. Package is currently in BETA and will be regulary updated in the future. All advices on how to improve it are warmly welcomed.
Should you encounter any issues or have a request for a new feature, please open an issue on Github repository

## Features

- **Framework Selection:** Choose between React or Next.js (app router).
- **Language Selection:** Choose between JavaScript or TypeScript.
- **Internationalization:** Optionally include i18next for multi-language support.
- **Project structure setup:** Each template includes predefined and scalable project structure.

## Installation

Before using this package, make sure you have Node.js and npm installed on your machine.

1. Install the package

```bash
npx devassist-generate-tempate
```

2. Set project name
3. Choose preferred framework (React or Next.js)
4. Choose preferred language (JavaScript or Typescript)
5. Choose whether you want to use internationalization (i18next)
6. Run the development server

```bash
npm run dev
```

## Project structure

When you generate a new project using this template generator, the project structure is organized to promote scalability and maintainability. Below is an overview of the directory structure for both **Next.js** and **React** projects.

### React Project Structure

--- /node_modules # Node.js packages<br/>
--- /public # Static files served by Next.js (images, fonts, etc.)<br/>
----- /locales # Translation files (**only in templates with translation**)<br/>
--- /src<br/>
------ /assets # Static files like images, fonts, and other media that are used in the project<br/>
------ /lib # Utility functions, services, custom hooks, etc.<br/>
---------- /services # API calls, business logic<br/>
---------- /store # Redux or other state management setup<br/>
---------- /types # custom type definitions and interfaces (**only in typescript templates**)<br/>
---------- /utils # General utility functions used accross the project<br/>
------ /pages # Contains React components that represent different routes in your application<br/>
------ /ui # UI components and containers<br/>
---------- /components # Reusable UI components<br/>
---------- /containers # Feature-specific UI containers<br/>
------ App.jsx (or .tsx) # Root component that wraps the entire application, setting up context providers and global styles<br/>
------ i18n.js (or .ts) # Internationalization configuration (**only in templates with translation**)<br/>
------ index.css # Global CSS styles applied across the entire application.<br/>
------ main.jsx # entry point of the React application where the root component (App.jsx) is rendered to the DOM.<br/>
------ vite-env.d.ts # File that ensures TypeScript types are correctly applied to React-specific features and configurations. (**only in typescript templates**)<br/>
--- .gitignore # Specifies which files and directories should be ignored by Git<br/>
--- eslintrc.json # ESLint configuration file<br/>
--- index.html # Main HTML template for the React application, providing the base structure and the root element where the React app is rendered.<br/>
--- package.json # Project metadata and dependencies<br/>
--- postcss.config.mjs # Postcss configuration file<br/>
--- README.md # Automaticly generated instructions for React projects<br/>
--- tailwind.config.js # Tailwind configuration file<br/>
--- tsconfig.app.json # Specifies TypeScript compiler options for the application code, including settings for module resolution and strict type checking. (**only in typescript templates**)<br/>
--- tsconfig.json # TypeScript compiler options configuration (**only in typescript templates**)<br/>
--- tsconfig.node.json # Configuration for TypeScript compiler options specifically for Node.js-related code, such as server-side logic and scripts.
(**only in typescript templates**)<br/>
--- vite.config.js (or .ts) # Vite configuration file<br/>

### Next.js Project Structure

--- /node_modules # Node.js packages<br/>
--- /public # Static files served by Next.js (images, fonts, etc.)<br/>
--- /src<br/>
------ /app # Next.js pages (routes)<br/>
------ /lib # Utility functions, services, custom hooks, etc.<br/>
----------/i18n # Internationalization configuration and translation files (**only in templates with translation**)<br/>
----------/services # API calls, business logic<br/>
----------/store # Redux or other state management setup<br/>
----------/types # custom type definitions and interfaces (**only in typescript templates**)<br/>
----------/utils # General utility functions used accross the project<br/>
------ /ui # UI components and containers<br/>
----------/components # Reusable UI components<br/>
----------/containers # Feature-specific UI containers<br/>
------ middleware.js (or .ts) # middleware setup (**only in templates with translation**)<br/>
--- eslintrc.json # ESLint configuration file<br/>
--- .gitignore # Specifies which files and directories should be ignored by Git<br/>
--- next-env.d.ts # File that ensures TypeScript types are correctly applied to Next.js-specific features and configurations. (**only in typescript templates**)<br/>
--- jsconfig.json # JS configuration file for Next.js projects<br/>
--- next.config.mjs # Next.js configuration file<br/>
--- package.json # Project metadata and dependencies<br/>
--- postcss.config.mjs # Postcss configuration file<br/>
--- README.md # Automaticly generated instructions for Next.js projects<br/>
--- tailwind.config.js (or .ts) # Tailwind configuration file<br/>
--- tsconfig.json # TypeScript compiler options configuration (**only in typescript templates**)<br/>

## Contributions

Contributions are welcome! Please open an issue or submit a pull request on the GitHub repository.

## Like my work?

Found this package helpful? [Buy me a coffee](https://buymeacoffee.com/devana1509)
