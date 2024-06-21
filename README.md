# cloud-computing

## API Description
This API provides endpoints for user authentication, retrieving optimal routes, place details, place reviews, and searching places using Google Maps API. The authentication is managed through Firebase, and the application is built using Node.js with Express framework. The data is stored in Cloud Firestore and the application is deployed using Google Cloud Run.

## Setup
1. Install dependencies:
   - Express
   - Nodemon (dev)
   - Firebase-admin
   - Axios
   - Dotenv
2. Access console.firebase.google.com, then create a new project. In Project Settings/Service Accounts, click the Generate new private key button.
3. Enter the data from the downloaded service account key into the ```.env``` file.
4. Enter the Google Maps API Key into the ```.env``` file.

## Run the API
1. Clone repository ```git clone https://github.com/JENTARA-Jelajah-Nusantara/cloud-computing.git```.
2. Run using ```npm run dev``` or ```node src/app.js```.

## API Documentation
[JENTARA API Documentation](https://documenter.getpostman.com/view/34832546/2sA3XS9LXj)
