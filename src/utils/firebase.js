import firebase from "react-native-firebase";

export default firebase;

export const db = firebase.firestore();

export const auth = {
  phoneNumber: async phoneNumber => {
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .catch(e => console.error(e.message));
    console.log("ok");
    return confirmationResult;
  }
};

export const storage = firebase.storage();
