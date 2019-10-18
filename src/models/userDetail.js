import { db, storage } from "app/src/utils/firebase";
import uuid from "uuid/v1";
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
  avatarStorageRef = (userId, filename) =>
    storage.ref(`avatar/${userId}/${filename}`);

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

  createAvatar = async (userId, file) => {
    const ext = file.split(".").pop();
    const filename = `${uuid()}.${ext}`;

    const req = await this.avatarStorageRef(userId, filename).putFile(file);
    return req;
  };
}

export default UserDetail;
