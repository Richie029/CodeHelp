# React + Vite Frontend

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This frontend project was bootstrapped with Vite and React. It is designed as a simple yet powerful code reviewer interface that connects to a backend service for AI-based code analysis.

## Installation
1. Clone the repository.
2. Navigate to the Frontend folder:
   ```
   cd f:\PROJECTS\AI code reviewer\Frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Development
- Uses [Vite](https://vitejs.dev/) for fast development and hot module replacement.
- Leverages [React](https://reactjs.org/) for building user interfaces.
- Supports code editing with [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor) and syntax highlighting via [PrismJS](https://prismjs.com/).

## Build & Deployment
- To build for production, run:
  ```
  npm run build
  ```
- To preview the production build locally:
  ```
  npm run preview
  ```

## Technologies
- **React** for UI components.
- **Vite** as the build tool.
- **Axios** for API communication.
- **PrismJS** for syntax highlighting.
- **Markdown** rendering with [react-markdown](https://github.com/remarkjs/react-markdown).

## Project Structure
```
f:\PROJECTS\AI code reviewer\Frontend
├── public        // Static assets
├── src
│   ├── App.jsx   // Main application component
│   ├── index.css // Global styles
│   └── main.jsx  // App entry point
├── package.json  // Project configurations
└── vite.config.js
```

## Contributing
Contributions are welcome! Please open an issue or pull request for any improvements.

## License
This project is licensed under the MIT License.
