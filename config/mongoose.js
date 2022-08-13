const mongoose = require('mongoose');
const uri = process.env.uri

mongoose.connect(uri, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log('connected to the MongoDB')
});