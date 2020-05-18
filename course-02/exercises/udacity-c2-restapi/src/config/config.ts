export const config = {
  "dev": {
    "username": process.env.RDS_USERNAME,
    "password": process.env.RDS_PASSWORD,
    "database": process.env.RDS_DATABASE,
    "host": process.env.RDS_HOST,
    "dialect": process.env.RDS_DIALECT,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_S3
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "ui": {
    "cloudfront": process.env.CLOUDFRONT_URL
  },
  "jwt":{
    "secret": process.env.UDACITY_SECRET
  }
}
