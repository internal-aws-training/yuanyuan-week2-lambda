const process = require('./src/process');

exports.handler = (event) => {
  console.log('Start process...');
  return process(event);
}
