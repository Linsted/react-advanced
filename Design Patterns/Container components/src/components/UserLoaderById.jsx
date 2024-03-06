import axios from "axios";
import React, { useEffect, useState } from "react";

const UserLoaderById = ({ children, id }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${id}`);

      setUser(response.data);
    })();
  }, [id]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoaderById;
