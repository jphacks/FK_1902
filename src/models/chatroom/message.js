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
        avatar: ""
      },
      createdAt: ""
    };
  }

  ref = chatroomId =>
    db
      .collection("chatrooms")
      .doc(chatroomId)
      .collection("messages");

  subscribe = (chatroomId, setMessages, userId, isHost) => {
    const unsbscribe = this.ref(chatroomId)
      .orderBy("createdAt", "desc")
      .onSnapshot(snapShot => {
        let messages = [];
        if (!snapShot.empty) {
          messages = snapShotToArray(snapShot);
          messages =
            !isHost &&
            messages.filter(message => {
              console.log(message);
              if (message._id === userId && message.system) {
                console.log("true", isHost);
                return true;
              } else {
                console.log("false", isHost);
                return false;
              }
            });
        }
        setMessages(messages);
      });
    return unsbscribe;
  };

  create(chatroomId, newMessage) {
    this.ref(chatroomId).add({ ...newMessage });
  }
}

export default Message;
