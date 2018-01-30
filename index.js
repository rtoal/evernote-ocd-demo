const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/recognize', (req, res) => {
  console.log(`Got ${req.body.secret}`);
  res.redirect('/report')
});

app.get('/report', (req, res) => {
  res.render('report', {name: 'XSS test <script>alert(1)</script>'});
});

app.listen(3000, () => console.log('Demo running on port 3000...'));
