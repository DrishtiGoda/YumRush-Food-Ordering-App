import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  // check if online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
      console.log("You are offline");
    });

    window.addEventListener("online", () => {
        setStatus(true);
        console.log("You are online");
      });
  }, []);

  return status;
};

export default useOnlineStatus;
