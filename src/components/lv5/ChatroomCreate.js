import React from "react";

export default class extends React.Component {
  state = {
    userId: "",
    user: { id: "", name: "", avatar: "" }
  };

  componentDidMount = async () => {
    const userId = auth.currentUserId();
    await this.setState({userId});
    userId && this.fetchUser();
  };

  fetchUser() {
    const { userId } = this.state;
    this.userDetail
      .getByUserId(userId)
      .then(profile =>
        this.setState({
          user: {
            id: profile.docId,
            name: profile.name,
            avatar: profile.avatar
          }
        })
      )
      .catch(e => console.log(e));
  }

  render() {
    return (

    )
  }
}
