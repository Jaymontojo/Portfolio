const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const next = require('next');

function setupServer() {
  const app = express();
  
  //MIDDLEWARE
  app.use(express.static(path.join(__dirname, '../client/.next')));
  app.use(express.json());
  app.use(helmet());
  app.use(morgan('common'));

  //ROUTES
  

  app.get('/api/world', (req, res) => {
    res.status(200).send('hello');
  });
  
  return app;
}

module.exports = setupServer;
