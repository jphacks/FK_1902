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

  ref = db.collection("chatroom");

  getAll = async () => {
    const snapShot = await this.ref.get().catch(e => console.error(e.message));
    return snapShotToArray(snapShot);
  };

  getByDocId = async docId => {
    const document = await this.ref
      .doc(docId)
      .get()
      .catch(e => console.error(e.message));
    const chatroom = documentToObject(document);
    chatroom.messages = chatroom.messages.map(message => {
      message.createdAt = message.createdAt.toDate();
      return message;
    });

    return chatroom;
  };

  createMessage(message) {
    this.ref.add({ message });
  }
}

export default Chatroom;
