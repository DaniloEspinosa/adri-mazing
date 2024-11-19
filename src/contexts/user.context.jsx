import { createContext, useState } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [user, setUser] = useState(null);

  const userData = {
    name: "Danilo",
    email: "danilo@gmail.com",
    isAdmin: true,
  };

  const login = () => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
