const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.send('Slow response');
  }, 100);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});