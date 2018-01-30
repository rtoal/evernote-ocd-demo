const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/recognize', (req, res) => {
  console.log(`Got ${req.body.secret}`);
  res.redirect(path.join('report.html'))
});

app.listen(3000, () => console.log('Demo running on port 3000...'));
