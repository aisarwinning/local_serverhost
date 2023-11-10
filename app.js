const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.send("test")
});

app.listen(port);

console.log('server started at http://localhost:' + port);
