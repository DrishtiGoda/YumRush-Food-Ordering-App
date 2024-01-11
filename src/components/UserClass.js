import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Name",
        location: "Location",
        company: "Company",
        avatar_url: "avatar_url",
      },
    };

    console.log("child constructor called");
  }

  async componentDidMount() {
    console.log("child component did mount called");
    const data = await fetch("https://api.github.com/users/drishtigoda");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });

    // console.log(jsonData);
  }

  componentDidUpdate() {
    console.log("child component did update called");
  }

  componentWillUnmount() {
    console.log("child component will unmount called");
  }

  render() {
    console.log("child render called");

    const { name, location, company, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url} />
        <h3> Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Company: {company}</h3>
      </div>
    );
  }
}

export default UserClass;
