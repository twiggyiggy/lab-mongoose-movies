'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({ // what's the difference between a schema and model??
  name: {
    type: String,
    required: true,
    unique: true
  },
  occupation: {
    type: String,
    required: true,
    unique: true
  },
  catchPhrase: {
    type: String,
    required: true,
    unique: true
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity; // what is module?
