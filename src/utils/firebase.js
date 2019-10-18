import firebase from "react-native-firebase";

export default firebase;

export const db = firebase.firestore();

export const auth = {
  phoneNumber: async phoneNumber => {
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
      .catch(e => console.error(e.message));
    return confirmationResult;
  },
  signOut: async () => {
    const req = await firebase.auth().signOut();
    return req;
  },
  currentUserId: () => {
    const currentUser = firebase.auth().currentUser;
    return currentUser ? currentUser.uid : "";
  },
  isSignedIn: () => {
    const currentUser = firebase.auth().currentUser;
    return !!currentUser;
  }
};

export const storage = firebase.storage();
