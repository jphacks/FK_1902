import React from "react";
import { Router, Tabs, Scene } from "react-native-router-flux";

import Chatroom from "app/src/components/lv5/Chatroom";
import ChatroomIndex from "app/src/components/lv5/ChatroomIndex";
import ChatroomNew from "app/src/components/lv5/ChatroomNew";
import Register from "app/src/components/lv5/Register";
import SettingProfile from "app/src/components/lv5/SettingProfile";

import NavBar from "app/src/components/lv2/NavBar";
import Container from "app/src/components/lv3/Container";

const Root = () => {
  return (
    <Router>
      <Container>
        <Scene hideNavBar kye="root">
          <Tabs key="tabs">
            <Scene
              key="chatroomIndex"
              component={ChatroomIndex}
              navBar={NavBar}
            />
            <Scene key="chatroomNew" component={ChatroomNew} navBar={NavBar} />
          </Tabs>
          <Scene key="chatroom" component={Chatroom} title="chatroom" />
          <Scene
            key="settingProfile"
            component={SettingProfile}
            title="プロフィール設定"
          />
          <Scene key="register" component={Register} title="新規登録" />
        </Scene>
      </Container>
    </Router>
  );
};

export default Root;
