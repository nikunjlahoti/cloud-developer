# cloud-developer
Solution for Udacity Cloud Developer ND - Project 2.

#### Stable branch: master
#### Dev branch: development

URLs (working as of the commit time) 
#### Frontend S3 Static Website: http://udacity-frontend-nikunj-dev.s3-website-us-east-1.amazonaws.com/index.html
#### CloudFront Deployment of Static Website: http://db5iw98rpv5zr.cloudfront.net/index.html
#### Project2: Image Filter Server: http://udagram-udacity-nikunj-image-filter-dev.us-east-1.elasticbeanstalk.com
Eg. http://udagram-udacity-nikunj-image-filter-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://cdn.pinkvilla.com/files/styles/contentpreview/public/iron-man-phase-4_0.jpg?itok=5eZBUTV1 

---

##### Future Work
I was deliberating where exactly to put in the new project in the existing course application and came up with these ideas:
1. Show user a preview of the image that they want to upload with the filter applied. That would mean - upload the current picture to S3 bucket.
2. ~~Short term, the /feed API would return the S3 Signed URLs, now the UI should send these images one by one to the image-filter API and show all the images in the feed with the same filter. This is a bit less intuitive though and required too many calls to the S3 bucket so I dropped the idea. ~~
3. (Without the preview but meet the dependency on public image URL) Provide a checkbox to the user to filter the image. As right now we only have one filter. If they choose to go ahead with the filter, we upload it to S3 first, and then give that URL to the filter-service and get the image back. Finally, we call another PUT on the same filename with this updated (image-filter applied) picture.
4. Like Instagram actually does it, we should upload the image (original image) and quickly run all possible variation on it and send the information back the client in a streaming API to show them all the previews whenever they are available on the server.
5. In our current datamodel, there isn't an association with the user and the image & caption uploaded.
