const { handler } = require('.');

const event = {
  Records: [
      {
        s3: {
            bucket: {
                name: "yyl-s3-bucket-001",
            },
            object: {
                key: "test.txt",
                versionId: "TxjNsQo0ve67zMBSsEipXKL4iVEKFaGZ",
            }
        }
      }
  ]
}

handler(event);