import React from "react";

import LoadingOverlay from "app/src/components/lv2/LoadingOverlay";
import ChatroomNewForm from "app/src/components/lv3/ChatroomNewForm";
import TagSelectModal from "app/src/components/lv3/TagSelectModal";

export default props => {
  const {
    chatroom,
    loading,
    isVisibleTagModal,
    toggleTagModal,
    onDeleteTag,
    onAddTag,
    selectedTags
  } = props;

  return (
    <>
      <LoadingOverlay loading={loading} />
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
