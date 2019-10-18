import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import sample from "app/src/components/lv5/sample";
import chatRoom from "app/src/components/lv5/chatRoom";

const Root = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="chatRoom" component={chatRoom} title="chatroom" />
        <Scene key="sample" component={sample} title="sample" />
      </Stack>
    </Router>
  );
};

export default Root;
