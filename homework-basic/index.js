const process = require('./src/process');

exports.handler = (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  return process(event);
};
