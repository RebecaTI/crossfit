import * as sdk from 'node-appwrite'

const {
  PROJECT_ID ,API_KEY,  DATABASE_ID, CLIENT_COLLECTION_ID, GYMINSTRUCTOR_COLLECTION_ID, NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT

} = process.env;

const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT!)
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!)
