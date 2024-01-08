import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);
  console.log(error.status);

  return <div className="error">
  <h1>
  Oops! Something went wrong
  </h1>
  <h3>{error.status}:{error.statusText}</h3>
  </div>;
};

export default Error;
