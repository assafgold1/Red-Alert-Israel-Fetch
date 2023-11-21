const express = require('express');
const axios = require('axios');
const dir = 'api';
const app = express();
const port = 3000;
const apiUrl = 'https://www.oref.org.il/WarningMessages/History/AlertsHistory.json';

app.get('/api', async (req, res) => {  
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/${dir}`);
});
