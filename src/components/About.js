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
        <UserClass />
      </div>
    );
  }
}

export default About;
