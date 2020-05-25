const { S3Client } = require('./clients');

const process = async event => {
  const {
    bucket: { name },
    object: { key },
  } = event.Records[0].s3;

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
};

module.exports = process;
