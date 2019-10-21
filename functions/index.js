const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./kamatte-17164-firebase-adminsdk-u6ubd-ded9ef1e2b.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

const userDetailProperties = {
  name: "",
  age: "0",
  gender: "0",
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/kamatte-17164.appspot.com/o/%E8%B5%A4%E9%A0%AD%E5%B7%BE%E3%81%A1%E3%82%83%E3%82%93%E3%81%AE%E3%83%95%E3%83%AA%E3%83%BC%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B33.png?alt=media&token=7271d7c1-5b9c-4f94-96be-eb008a5d97a4",
  silver: 0,
  gold: 0
};

const userDetailRef = db.collection("userDetails");

exports.createUserDetail = functions
  .region("asia-northeast1")
  .auth.user()
  .onCreate(user => {
    userDetailRef.doc(user.uid).set(userDetailProperties);

    return 1;
  });

exports.deleteUserDetail = functions
  .region("asia-northeast1")
  .auth.user()
  .onDelete(user => {
    userDetailRef.doc(user.uid).delete();
    return 1;
  });
