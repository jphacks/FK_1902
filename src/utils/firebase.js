import firebase from "react-native-firebase";
import { GoogleSignin } from "react-native-google-signin";

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
  },
  siginInWithGoogle: async () => {
    await GoogleSignin.configure({
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      webClientId: ""
    });
    const { accessToken, idToken } = await GoogleSignin.signIn();
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    );
    await firebase.auth().signInWithCredential(credential);
  }
};

export const storage = firebase.storage();
