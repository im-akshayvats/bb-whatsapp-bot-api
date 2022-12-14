const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const mongoose = require('./config/mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./routes/index'));

app.listen(port, () => {
  return console.log('Server is listening on port', port);
})