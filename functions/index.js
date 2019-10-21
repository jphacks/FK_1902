const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./kamatte-26d90-firebase-adminsdk-ttvc8-f22cb7e2ab.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

const defaultAvatar =
  "https://firebasestorage.googleapis.com/v0/b/kamatte-26d90.appspot.com/o/%E3%83%86%E3%82%99%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3.png?alt=media&token=56a0c399-0041-40ab-a51a-f382acf2ca45";

const userDetailProperties = {
  name: "",
  age: "0",
  gender: "0",
  avatar: defaultAvatar,
  silver: 0,
  gold: 0
};

const userDetailRef = db.collection("userDetails");

exports.createUserDetail = functions
  .region("asia-northeast1")
  .auth.user()
  .onCreate(user => {
    console.log("created user: ", user.uid);
    userDetailRef.doc(user.uid).set(userDetailProperties);

    return 1;
  });

exports.deleteUserDetail = functions
  .region("asia-northeast1")
  .auth.user()
  .onDelete(user => {
    console.log("deleted user: ", user.uid);
    userDetailRef.doc(user.uid).delete();
    return 1;
  });
