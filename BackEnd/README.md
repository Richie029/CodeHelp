# Node.js Express Backend

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This backend service is built using Node.js and Express. It provides endpoints for performing AI-driven code reviews by communicating with an AI model. The service is designed to be simple, modular, and scalable.

## Installation
1. Clone the repository.
2. Navigate to the BackEnd folder:
   ```
   cd f:\PROJECTS\AI code reviewer\BackEnd
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
- To start the server, run:
  ```
  node server.js
  ```
- The server will listen on `http://localhost:3000`.

## API Endpoints
### POST /ai/get-review
- **Description:** Sends code to be reviewed by the AI service.
- **Request Body:**
  ```json
  {
    "code": "Your code here"
  }
  ```
- **Response:** A detailed code review including issues, suggestions, and corrected code if necessary.

## Technologies
- **Express:** Web framework for Node.js.
- **Axios:** HTTP client for making requests.
- **OpenAI / Google Gemini API:** Used for generating the code review (configure the service with your API keys).

## Project Structure
```
f:\PROJECTS\AI code reviewer\BackEnd
├── src
│   ├── controllers
│   │   └── ai.controller.js   // Handles incoming review requests
│   ├── routes
│   │   └── ai.routes.js       // API endpoints
│   ├── services
│   │   └── ai.service.js      // Connects to the AI API
│   └── app.js                 // Express app configuration
├── server.js                  // Entry point for the server
├── package.json               // Project configurations and dependencies
└── .env                     // Environment variables (e.g., API keys)
```

## Environment Variables
Create a `.env` file in the BackEnd folder with the necessary API keys and configurations. For example:
```
GOOGLE_GEMINI_KEY=YOUR_API_KEY
```

## Contributing
Contributions are welcome! Please ensure that any changes are well-tested and documented. Open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
