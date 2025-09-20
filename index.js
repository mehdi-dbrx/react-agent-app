const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static('public'));

// Databricks configuration
const DATABRICKS_HOST = 'https://adb-xxx.11.azuredatabricks.net';
const DATABRICKS_TOKEN = 'dapixxx';
const SERVING_ENDPOINT = 'databricks-claude-sonnet-4';

// Proxy endpoint for chat completions
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    const response = await axios.post(
      `${DATABRICKS_HOST}/serving-endpoints/${SERVING_ENDPOINT}/invocations`,
      {
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${DATABRICKS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error calling Databricks:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to get response from the chatbot. Please try again.' 
    });
  }
});

// Serve the React app for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Frontend: http://localhost:${PORT}`);
  console.log(`API: http://localhost:${PORT}/api/chat`);
});
