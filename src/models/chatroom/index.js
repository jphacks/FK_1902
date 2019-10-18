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

  ref = db.collection("chatrooms");

  getAll = async () => {
    const snapShot = await this.ref.get().catch(e => console.error(e.message));
    return snapShotToArray(snapShot);
  };

  subscribe = (chatroomId, setChatroom) => {
    this.ref.doc(chatroomId).onSnapshot(document => {
      const chatroom = documentToObject(document);
      setChatroom(chatroom);
    });
  };

  createMessage(message) {
    this.ref.add({ message });
  }
}

export default Chatroom;
