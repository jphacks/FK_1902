import { db, storage } from "app/src/utils/firebase";
import { snapShotToArray, documentToObject } from "app/src/models/utils/format";

class UserDetail {
  static get properties() {
    return {
      name: "",
      age: "0",
      gender: "0",
      avatar: "",
      currency: {
        shinsatsuken: 0,
        shohosen: 0
      }
    };
  }

  dbRef = db.collection("userDetails");
  avatarStorageRef = storage.ref().child("avatar");

  getByUserId = async userId => {
    const document = await this.dbRef
      .doc(userId)
      .get()
      .then(res => documentToObject(res))
      .catch(e => console.error(e.message));
    return document;
  };

  set = async (userId, profile) => {
    delete profile.docId;
    const req = await this.dbRef.doc(userId).set({ ...profile });
    return req;
  };

  createAvatar = async file => {
    const req = await this.avatarStorageRef
      .put(file)
      .catch(e => console.error(e.message));
    return req;
  };
}

export default UserDetail;
