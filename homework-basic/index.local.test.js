const { handler } = require('.');

const event = {
  Records: [
    {
      s3: {
        bucket: {
          name: 'yyl-week2-basic-s3-source-bucket',
        },
        object: {
          key: 'test.txt',
        },
      },
    },
  ],
};

handler(event);
