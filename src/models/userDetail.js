import { db, storage } from "app/src/utils/firebase";
import { snapShotToArray, documentToObject } from "app/src/models/utils/format";

class UserDetail {
  static get properties() {
    return {
      name: "",
      age: "0",
      gender: "0",
      avater: "",
      currency: {
        shinsatsuken: 0,
        shohosen: 0
      }
    };
  }

  dbRef = db.collection("userDetails");
  avaterStorageRef = storage.ref().child("avater");

  getByUserId = async userId => {
    const document = await this.dbRef
      .doc(userId)
      .get()
      .catch(e => console.error(e.message));
    return documentToObject(document);
  };

  set = async (userId, profile) => {
    delete profile.docId;
    const req = await this.dbRef.doc(userId).set({ ...profile });
    return req;
  };

  createAvater = async file => {
    const req = await avaterStorageRef.put(file).then(snapShot => {
      console.log(snapShot);
    });
    return req;
  };
}

export default UserDetail;
