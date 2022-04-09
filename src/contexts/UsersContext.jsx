import { createContext } from "react";

export const UsersContext = createContext();

const test = [2, 4, 7];
const UsersProvider = (props) => {
  const values = { test };

  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
