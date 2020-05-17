# Get Started
If you have `nvm` installed, run `nvm use` or `nvm install v12.13`.

If you have Node installed, ensure you it is version 12 (the last long-term stable release). 

Once Node is ready, run `npm install`.

#Deployment



# Homework
## 1. Basic 
### When create or update a txt file to source bucket, it can trigger the lambda function to copy the txt file to target bucket
![Basic arch](./docs/diagram/Homework-week2-basic-arch.png)

### Scripts
#### Deploy resources to AWS
```
./auto/homework-basic/deploy  
```

#### Local testing the lambda function to copy .txt file from one bucket to another bucket
```
npm run local-test
```

## 2. Advanced
### AWS lambda invoke another one
N/A
### AWS lambda can consumer event from SNS
N/A
