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
  { key: "settingProfile", component: SettingProfile }
];

export default class extends React.Component {
  userDetail = new UserDetail();

  state = {
    user: { ...UserDetail.properties }
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    this.userId = await auth.currentUserId();
    if (!this.userId) {
      Actions.register();
    } else {
      await this.userDetail
        .getByUserId(this.userId)
        .then(profile => {
          this.setState({
            user: { ...profile }
          });
          !profile.name && Actions.settingProfile({ isUserCreate: true });
        })
        .catch(e => console.log(e));
    }
  };

  render() {
    const { user } = this.state;

    return (
      <Router>
        <Scene hideNavBar key="root">
          <Tabs
            key="tabs"
            tabBarComponent={({ focused }) => <TabBar active={focused} />}>
            {tabComponents.map(item => (
              <Scene
                key={item.key}
                component={props => {
                  const Component = item.component;
                  return (
                    <Container bgColor={COLOR.main}>
                      <Component {...props} user={user} userId={this.userId} />
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
              component={props => {
                const Component = item.component;
                return (
                  <Container bgColor={COLOR.whiteMain}>
                    <Component
                      {...props}
                      user={user}
                      userId={this.userId}
                      reloadUser={this.fetchUser}
                    />
                  </Container>
                );
              }}
            />
          ))}
          <Scene
            hideNavBar
            key="chatroom"
            component={props => (
              <Chatroom {...props} user={user} userId={this.userId} />
            )}
          />
        </Scene>
      </Router>
    );
  }
}
