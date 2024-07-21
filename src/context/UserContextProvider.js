import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //children is a destructured prop and represents and nested components that passed to UserContextProvider when used
  return (
    <UserContext.Provider value={{ user, setUser }}> 
      {children};
    </UserContext.Provider>
  );
  //basically we are giving an access to both the user and setUser to the childrens.
  //{children}; bascially means the component UserContext.Provider will return any children that has been passed to it.
};

export default UserContextProvider;  //this entire process was basically creating the store or creating a providor function.
