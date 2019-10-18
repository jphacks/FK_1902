import { db } from "app/src/utils/firebase";
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

  ref = db.collection("userDetails");

  getByUserId = async userId => {
    const document = await this.ref
      .doc(userId)
      .get()
      .catch(e => console.error(e.message));
    return documentToObject(document);
  };

  set = async (userId, profile) => {
    delete profile.docId;
    const req = await this.ref.doc(userId).set({ ...profile });
    return req;
  };

  // createAvater -> storage
}

export default UserDetail;
