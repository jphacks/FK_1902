import React from "react";
import { Actions } from "react-native-router-flux";
import { Router, Tabs, Scene } from "react-native-router-flux";

import COLOR from "app/src/config/color.json";

import { auth } from "app/src/utils/firebase";
import UserDetail from "app/src/models/userDetail";

import NavBar from "app/src/components/lv3/NavBar";
import TabBar from "app/src/components/lv3/TabBar";
import Container from "app/src/components/lv3/Container";

import ChatroomIndex from "app/src/components/lv5/ChatroomIndex";
import ChatroomNew from "app/src/components/lv5/ChatroomNew";

import Register from "app/src/components/lv5/Register";
import Chatroom from "app/src/components/lv5/Chatroom";
import SettingProfile from "app/src/components/lv5/SettingProfile";

const tabComponents = [
  { key: "chatroomIndex", component: ChatroomIndex },
  { key: "chatroomNew", component: ChatroomNew }
];

const noTabComponents = [
  { key: "register", component: Register },
  { key: "chatroom", component: Chatroom },
  { key: "settingProfile", component: SettingProfile }
];

export default class extends React.Component {
  userDetail = new UserDetail();

  state = {
    user: { ...UserDetail.properties }
  };

  componentDidMount = async () => {
    const userId = await auth.currentUserId();
    if (userId) {
      this.fetchUser(userId);
    } else {
      // login実装後コメント外す
      // Actions.register();
    }
  };

  fetchUser = async userId => {
    await this.userDetail
      .getByUserId(userId)
      .then(profile =>
        this.setState({
          user: { ...profile }
        })
      )
      .catch(e => console.log(e));
  };

  render() {
    const { user } = this.state;

    return (
      <Router>
        <Scene hideNavBar key="root">
          <Tabs key="tabs" tabBarComponent={TabBar}>
            {tabComponents.map(item => (
              <Scene
                key={item.key}
                component={() => {
                  const Component = item.component;
                  return (
                    <Container bgColor={COLOR.main}>
                      <Component user={user} />
                    </Container>
                  );
                }}
                navBar={() => <NavBar user={user} />}
              />
            ))}
          </Tabs>

          {noTabComponents.map(item => (
            <Scene
              hideNavBar
              key={item.key}
              component={() => {
                const Component = item.component;
                return (
                  <Container bgColor={COLOR.whiteMain}>
                    <Component user={user} />
                  </Container>
                );
              }}
            />
          ))}
        </Scene>
      </Router>
    );
  }
}
