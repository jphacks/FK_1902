import firebase from "react-native-firebase";

export default firebase;

export const db = firebase.firestore();

export const test = () => {
  firebase
    .auth()
    .signInAnonymously()
    .then(user => {
      console.log(user.isAnonymous);
      console.log("ok");
    });
};

export const storage = firebase.storage();
