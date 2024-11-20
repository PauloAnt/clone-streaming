import admin from "firebase-admin";
import dotenv from 'dotenv';
dotenv.config();
import serviceAccount from process.env.DATABASE_ACCOUNT_KEY;

const serviceAccount = JSON.parse(serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

export default admin.firestore();