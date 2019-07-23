'use strict';

const Celebrity = require('../models/Celebrity.js'); // revise for later

const mongoose = require('mongoose'); //

mongoose.connect('mongodb://localhost/movies', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const celebrities = [{ name: 'Brad Pitt', occupation: 'actor', catchPhrase: 'I miss Angelina!' }, { name: 'John Lennon', occupation: 'musician', catchPhrase: 'Make love, not war' }, { name: 'Bob Marley', occupation: 'musician', catchPhrase: 'Money cannot buy you life' }];

Celebrity.create(celebrities);

mongoose.disconnect();
