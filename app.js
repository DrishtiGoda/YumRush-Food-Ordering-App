import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = <h1>Title</h1>;

//React Component
const Heading = () => {
  return (
    <div>
      <h1>Heading</h1>
    </div>
  );
};

// React Component
const Component = () => {
  return (
    <div>
      <h1> Use of React Component & React Element </h1>
      {title}
      {Heading()}
      <Heading />
      <Heading></Heading>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);
