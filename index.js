const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/recognize', (req, res) => {
  console.log('Got something');
  res.redirect(path.join('report.html'))
});

app.listen(3000, () => console.log('Demo running on port 3000...'));
