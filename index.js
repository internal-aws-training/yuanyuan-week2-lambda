const process = require('./src/process');

exports.handler = (event) => {
  console.log('Print event: ', event);
  return process(event);
};
