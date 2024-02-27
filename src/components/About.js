import UserContext from "../utils/userContext";
import UserClass from "./UserClass";
import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../images/loading.json";

const style = {
  height: 300,
  with: 200,
};

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor called");
  }

  componentDidMount() {
    // console.log("parent component did mount called");
    // api call
  }

  render() {
    // console.log("parent render called˝");
    return (
      <div className="about">
        <div className="flex flex-col items-center justify-center mt-64">
          <Lottie animationData={LoadingAnimation} loop={true} style={style} />
          <h1 className="text-xl text-bold">Work In Progess...</h1>
        </div>
        {/* <div>
          <UserContext.Consumer>
            {(data) => console.log({ data })}
          </UserContext.Consumer>
        </div>
        <UserClass /> */}
      </div>
    );
  }
}

export default About;
