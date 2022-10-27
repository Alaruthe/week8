import admin from "firebase-admin";

const serviceAccount = JSON.parse(
    process.env.NEXT_PUBLIC_FIREBASE_DATABASE_PRIVATEKEY
);

try {
    admin.initializaApp(

    );
} catch(err){
    console.log("firebase err", err.stack);
}