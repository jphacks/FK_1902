import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import sample from "app/src/components/lv5/sample";
import sample2 from "app/src/components/lv5/sample2";

const Root = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="sample" component={sample} title="sample" />
        <Scene key="sample2" component={sample2} title="sample2" />
      </Stack>
    </Router>
  );
};

export default Root;