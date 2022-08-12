const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/bb-whatsapp-bot-api';

mongoose.connect(uri, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('connected to the MongoDB')
});