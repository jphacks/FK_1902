import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import sample from "app/src/components/pages/sample";
import chatSample from "app/src/components/pages/chatSample";

const Root = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="sample" component={sample} title="sample" />
        <Scene key="chatSample" component={chatSample} title="chatroom" />
      </Stack>
    </Router>
  );
};

export default Root;
