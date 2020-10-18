const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'client-build')));
app.use(express.static(path.join(__dirname, 'restaurant-build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/client/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client-build', 'index.html'));
});

app.get('/restaurant/', function (req, res) {
    res.sendFile(path.join(__dirname, 'restaurant-build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
