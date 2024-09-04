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

├── /node_modules # Node.js packages
├── /public # Static files served by Next.js (images, fonts, etc.)  
│ ├── /locales # Translation files (**only in templates with translation**)  
├── /src  
│ ├── /assets # Static files like images, fonts, and other media that are used in the project
│ ├── /lib # Utility functions, services, custom hooks, etc.  
│ │ ├── /services # API calls, business logic  
│ │ ├── /store # Redux or other state management setup  
│ │ ├── /types # custom type definitions and interfaces (**only in typescript templates**)  
│ │ ├── /utils # General utility functions used accross the project  
│ └── /pages # Contains React components that represent different routes in your application  
│ ├── /ui # UI components and containers  
│ │ ├── /components # Reusable UI components  
│ │ ├── /containers # Feature-specific UI containers  
│ ├── App.jsx (or .tsx) # Root component that wraps the entire application, setting up context providers and global styles  
│ ├── i18n.js (or .ts) # Internationalization configuration (**only in templates with translation**)  
│ ├── index.css # Global CSS styles applied across the entire application.  
│ ├── main.jsx # entry point of the React application where the root component (App.jsx) is rendered to the DOM.  
│ ├── vite-env.d.ts # File that ensures TypeScript types are correctly applied to React-specific features and configurations. (**only in typescript templates**)  
└── .gitignore # Specifies which files and directories should be ignored by Git  
└── eslintrc.json # ESLint configuration file  
└── index.html # Main HTML template for the React application, providing the base structure and the root element where the React app is rendered.  
└── package.json # Project metadata and dependencies  
└── postcss.config.mjs # Postcss configuration file  
└── README.md # Automaticly generated instructions for React projects  
└── tailwind.config.js # Tailwind configuration file  
└── tsconfig.app.json # Specifies TypeScript compiler options for the application code, including settings for module resolution and strict type checking. (**only in typescript templates**)  
└── tsconfig.json # TypeScript compiler options configuration (**only in typescript templates**)  
└── tsconfig.node.json # Configuration for TypeScript compiler options specifically for Node.js-related code, such as server-side logic and scripts.
(**only in typescript templates**)  
└── vite.config.js (or .ts) # Vite configuration file

### Next.js Project Structure

├── /node_modules # Node.js packages
├── /public # Static files served by Next.js (images, fonts, etc.)
├── /src
│ ├── /app # Next.js pages (routes)
│ ├── /lib # Utility functions, services, custom hooks, etc.
│ │ ├── /i18n # Internationalization configuration and translation files (**only in templates with translation**)
│ │ ├── /services # API calls, business logic
│ │ ├── /store # Redux or other state management setup
│ │ └── /types # custom type definitions and interfaces (**only in typescript templates**)
│ │ └── /utils # General utility functions used accross the project
│ ├── /ui # UI components and containers
│ │ ├── /components # Reusable UI components
│ │ └── /containers # Feature-specific UI containers  
│ ├── middleware.js (or .ts) # middleware setup (**only in templates with translation**)
├── eslintrc.json # ESLint configuration file
├── .gitignore # Specifies which files and directories should be ignored by Git
├── next-env.d.ts # File that ensures TypeScript types are correctly applied to Next.js-specific features and configurations. (**only in typescript templates**)
├── jsconfig.json # JS configuration file for Next.js projects
├── next.config.mjs # Next.js configuration file
└── package.json # Project metadata and dependencies
└── postcss.config.mjs # Postcss configuration file
└── README.md # Automaticly generated instructions for Next.js projects
└── tailwind.config.js (or .ts) # Tailwind configuration file
└── tsconfig.json # TypeScript compiler options configuration (**only in typescript templates**)

## Contributions

Contributions are welcome! Please open an issue or submit a pull request on the GitHub repository.

## Buy me a coffee

Found this package helpful? [Buy me a coffee](https://buymeacoffee.com/devana1509)
