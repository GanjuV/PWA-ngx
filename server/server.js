/** 
*    Date: 01 September 2018
*    Description: Basic server start up and API expose code
*    Version: 1.0
*    Author: Vaibhav Ganju
*/
const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');

// const config = require('./config/config.js');

const port  = process.env.PORT || 9000;


// Configuration
// ================================================================================================

// Set up Mongoose
// mongoose.connect(config.db, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require('./routes')(app);
app.use(express.static(path.resolve(__dirname, '../client/dist/client/')));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/dist/client/index.html'));
  // res.end();
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

// module.exports = app;
