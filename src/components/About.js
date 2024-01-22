import UserContext from "../utils/userContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent component did mount called");
    // api call
  }

  render() {
    console.log("parent render called˝");
    return (
      <div className="about">
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {(data) => console.log({ data })}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default About;
