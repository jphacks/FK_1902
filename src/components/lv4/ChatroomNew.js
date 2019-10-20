import React from "react";

import ChatroomNewForm from "app/src/components/lv3/ChatroomNewForm";
import TagSelectModal from "app/src/components/lv3/TagSelectModal";

export default props => {
  const {
    chatroom,
    isVisibleTagModal,
    toggleTagModal,
    onDeleteTag,
    onAddTag,
    selectedTags
  } = props;

  return (
    <>
      <TagSelectModal
        isVisible={isVisibleTagModal}
        addTag={onAddTag}
        selectedTags={chatroom.tags}
        deleteTag={onDeleteTag}
        toggleModal={toggleTagModal}
      />
      <ChatroomNewForm {...props} />
    </>
  );
};
