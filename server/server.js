const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('angularjs'));

var db;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.listen('3300', () => {
  console.log('Listening on port 3300...');
});
