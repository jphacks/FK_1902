import { db } from "app/src/utils/firebase";
import { snapShotToArray, documentToObject } from "app/src/models/utils/format";

class Message {
  static get properties() {
    return {
      _id: "",
      text: "",
      user: {
        _id: "",
        name: "",
        avater: ""
      },
      createdAt: ""
    };
  }

  ref = chatroomId =>
    db
      .collection("chatrooms")
      .doc(chatroomId)
      .collection("messages");

  subscribe = (chatroomId, setMessages) => {
    this.ref(chatroomId)
      .orderBy("createdAt", "desc")
      .onSnapshot(snapShot => {
        const messages = snapShotToArray(snapShot);
        setMessages(messages);
      });
  };

  create(chatroomId, newMessage) {
    this.ref(chatroomId).add({ ...newMessage });
  }
}

export default Message;
