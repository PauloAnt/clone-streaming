import admin from "firebase-admin";
import dotenv from 'dotenv';
dotenv.config();
import serviceAccount from "./api-project-97084-firebase-adminsdk-8cwt5-4969878925.json" assert { type: "json" };
;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});
export default admin.firestore();
