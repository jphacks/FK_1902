import { db } from "app/src/utils/firebase";
import { snapShotToArray, documentToObject } from "app/src/models/utils/format";

class Chatroom {
  static get properties() {
    return {
      host: "",
      guest: "",
      messages: [],
      detail: {
        title: "",
        content: ""
      },
      createdAt: ""
    };
  }

  dbRef = db.collection("chatrooms");

  getAll = async () => {
    const snapShot = await this.dbRef
      .get()
      .catch(e => console.error(e.message));
    return snapShotToArray(snapShot);
  };

  subscribe = (chatroomId, setChatroom) => {
    this.dbRef.doc(chatroomId).onSnapshot(document => {
      const chatroom = documentToObject(document);
      setChatroom(chatroom);
    });
  };

  create = async chatroom => {
    chatroom.createdAt = new Date();
    const chatroomRef = await this.dbRef.add({ ...chatroom });
    return chatroomRef.id;
  };
}

export default Chatroom;
