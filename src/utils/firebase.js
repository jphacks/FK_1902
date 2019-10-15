import firebase from 'react-native-firebase';

export default () => {
  console.log('call');
  firebase
    .auth()
    .signInAnonymously()
    .then(user => {
      console.log(user.isAnonymous);
      console.log('ok');
    });
};
