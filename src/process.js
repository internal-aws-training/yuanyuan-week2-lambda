const { S3Client } = require('./clients');

const process = async event => {
  const s3Source = event.Records[0].s3;
  const snsMessage = event.Records[0].Sns.Message;
  if (snsMessage) {
    console.log('Message received from SNS:', snsMessage);
    // callback(null, "Success");
  }
  if (s3Source) {
    const {
      bucket: { name },
      object: { key },
    } = s3Source;

    const s3Client = new S3Client();

    const sourceObjectParam = {
      bucketName: name,
      objectKey: key,
    };
    const source = await s3Client.getObject(sourceObjectParam);
    console.log('Form source bucket, got source object:', source);

    const targetObjectParam = {
      targetBucketName: 'yyl-week2-basic-s3-target-bucket',
      object: source.Body,
      objectName: key,
    };
    console.log(
      'Upload source to targetBucket successfully',
      await s3Client.putObject(targetObjectParam),
    );
  }
};

module.exports = process;
