import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import sample from "app/src/components/lv5/sample";
import Chatroom from "app/src/components/lv5/Chatroom";
import Register from "app/src/components/lv5/Register";
import SettingProfile from "app/src/components/lv5/SettingProfile";

const Root = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="sample" component={sample} title="sample" />
        <Scene key="chatroom" component={Chatroom} title="chatroom" />
        <Scene key="register" component={Register} title="新規登録" />
        <Scene
          key="settingProfile"
          component={SettingProfile}
          title="プロフィール設定"
        />
      </Stack>
    </Router>
  );
};

export default Root;
