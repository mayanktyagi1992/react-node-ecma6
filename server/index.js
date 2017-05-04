'use strict';

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const EventEmitter = require('events');
if(env === 'development' || env === 'test' || env === 'production') {
  // Register the Babel require hook
  require('babel-register');
}

// Export the application
module.exports = require('./app');
