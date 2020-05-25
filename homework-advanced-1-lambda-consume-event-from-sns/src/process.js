const process = async event => {
  const snsMessage = event.Records[0].Sns.Message;
  console.log('Message received from SNS:', snsMessage);
};

module.exports = process;
