const { S3 } = require('aws-sdk');

class S3Client {
  constructor() {
    this._s3 = new S3();
  }

  async getObject({ bucketName, objectKey }) {
    const params = {
      Bucket: bucketName,
      Key: objectKey,
    };

    return this._s3.getObject(params).promise();
  }

  putObject({ targetBucketName, object, objectName }) {
    const params = {
      Bucket: targetBucketName,
      Body: object,
      Key: objectName,
    };

    return this._s3.putObject(params).promise();
  }
}

module.exports = S3Client;
