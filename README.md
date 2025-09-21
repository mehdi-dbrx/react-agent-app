# React Chatbot App

A modern React-based chatbot application with Databricks integration.

## Features

- **Real-time Chat Interface**: Clean, responsive UI
- **Streaming Responses**: Live message streaming from Databricks Serving Endpoints
- **CORS-Free Architecture**: Node.js proxy server handles API calls
- **Environment Configuration**: Centralized config via `app.yaml`

## Tech Stack

- **Frontend**: React 18, TypeScript, CSS3
- **Backend**: Node.js, Express.js
- **Deployment**: Databricks Apps

## Project Structure

```
chatbot-react-app/
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx    # Main chat UI
│   │   └── ChatInterface.css    # Responsive styling
│   ├── services/
│   │   └── databricksService.ts # API integration
│   └── App.tsx                  # Main application
└── server/
    ├── index.js                 # Express proxy server
    ├── app.yml                  # Deployment config
    └── public/                  # Built React files
```

## Quick Start

1. **Development**: `npm start` (React dev server)
2. **Production**: Deploy `server/` folder to Databricks Apps
3. **Configuration**: Update environment variables in `app.yml`

## Key Files

- `ChatInterface.css` - UI styling 
- `index.js` - Express proxy server
- `app.yml` - Databricks Apps deployment config
