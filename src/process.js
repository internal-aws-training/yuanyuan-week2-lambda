const { S3Client } = require('./clients');

const process = async (event) => {
  const {
    bucket: { name },
    object: { key },
  } = event.Records[0].s3;
  const s3Client = new S3Client();

  console.log('Start to get source object from s3 bucket....');
  const sourceObjectParam = {
    bucketName: name,
    objectKey: key,
  };
  const source = await s3Client.getObject(sourceObjectParam);
  console.log('Got source object:', source);

  console.log('Start to put source object to target s3 bucket....');
  const targetObjectParam = {
    targetBucketName: 'yyl-s3-target-bucket-001',
    object: source.Body,
    objectName: key,
  };
  await s3Client.putObject(targetObjectParam);
  console.log('Upload source to targetBucket successfully');
};

module.exports = process;
