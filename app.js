'use strict';
const express = require('express');
const app = express();
const multer = require("multer");
const fs = require('fs').promises;
app.use(multer().none());


/**
 * Returns quotes inside the quotes.json file.
 * Response type: text/plain
 * @param {string} name - represents person to be greeted
 */
app.get('/greetings/:name?', async function(req, res) {
  try {
    let name = req.params['name'];
    console.log(name === '');
    if (!name) {
      const code = 400;
      res.type('text').status(code);
      res.send('Missing required param');
    } else {
      res.type('text').send(' Hello, ' + name +'!');
    }
  } catch (error) {
    console.log(error);
    res.type('text').status(error);
    res.send('Something went wrong');
  }
});

const portnumber = 8000;
app.use(express.static('public'));
const PORT = process.env.PORT || portnumber;
app.listen(PORT);