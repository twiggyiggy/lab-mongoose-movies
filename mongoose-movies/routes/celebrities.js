'use strict';
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.js');

router.get('/', async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    // console.log(allCelebrities);
    res.render('celebrities/index', { allCelebrities }); // wrapping the variable(array) in {} converts it into an object, which is what the render method needs to work - handlebars peculiarity.
  } catch (error) {
    next(error);
  }
})
;

module.exports = router;
