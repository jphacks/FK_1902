import firebase from "react-native-firebase";
import { GoogleSignin } from "react-native-google-signin";
import { Alert } from "react-native";
import { Actions } from "react-native-router-flux";

import errorAlert from "app/src/utils/errorAlert";

export default firebase;

export const db = firebase.firestore();

export const auth = {
  signOut: () => {
    Alert.alert("", "ログアウトしますか？", [
      {
        text: "いいえ"
      },
      {
        text: "はい",
        onPress: () => {
          firebase
            .auth()
            .signOut()
            .catch(() => errorAlert());
          Actions.register();
        }
      }
    ]);
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
      webClientId:
        "72871638060-3tuhl7oo8j0dp4rrr3821ssct91jc6j8.apps.googleusercontent.com"
    });
    const { accessToken, idToken } = await GoogleSignin.signIn();
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken
    );
    await firebase.auth().signInWithCredential(credential);
  },
  delete: () => {
    Alert.alert("", "アカウントを削除しますか？", [
      {
        text: "いいえ"
      },
      {
        text: "はい",
        onPress: () => {
          Alert.alert(
            "",
            `アカウントを削除すると二度と復旧できません。
よろしいでしょうか？`,
            [
              {
                text: "いいえ"
              },
              {
                text: "はい",
                onPress: async () => {
                  const currentUser = await firebase.auth().currentUser;
                  currentUser
                    .delete()
                    .then(() => Actions.register())
                    .catch(e => {
                      console.log(e.message);
                      errorAlert();
                    });
                }
              }
            ]
          );
        }
      }
    ]);
  }
};

export const storage = firebase.storage();
