import { db } from "app/src/utils/firebase";
import { snapShotToArray, documentToObject } from "app/src/models/utils/format";

class Chatroom {
  static get properties() {
    return {
      host: { id: "", name: "", avatar: "" },
      guest: { id: "", name: "", avatar: "" },
      tags: [],
      title: "",
      content: "",
      isActive: true,
      guestHistory: [],
      createdAt: ""
    };
  }

  dbRef = db.collection("chatrooms");
  emptyUser = { id: "", name: "", avatar: "" };

  getAll = async () => {
    const snapShot = await this.dbRef
      .where("isActive", "==", true)
      .get()
      .catch(e => console.error(e.message));
    return snapShotToArray(snapShot);
  };

  subscribe = (chatroomId, setChatroom) => {
    const unsbscribe = this.dbRef.doc(chatroomId).onSnapshot(document => {
      const chatroom = documentToObject(document);
      setChatroom(chatroom);
    });
    return unsbscribe;
  };

  create = async chatroom => {
    chatroom.createdAt = new Date();
    const chatroomRef = await this.dbRef.add({ ...chatroom });
    return chatroomRef.id;
  };

  updateGuest = async (chatroomId, chatroom, newUser) => {
    let req;

    if (newUser) {
      const guest = {
        id: newUser.docId,
        name: newUser.name,
        avatar: newUser.avatar
      };
      req = await this.dbRef.doc(chatroomId).update({ guest });
    } else {
      const guestHistory = chatroom.guestHistory;
      guestHistory.push(chatroom.guest);

      req = await this.dbRef
        .doc(chatroomId)
        .update({ guest: { ...this.emptyUser }, guestHistory });
    }

    return req;
  };

  delete = async chatroomId => {
    const req = await this.dbRef.doc(chatroomId).update({ isActive: false });
    return req;
  };
}

export default Chatroom;
