import { useContext, useState } from "react";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const SettingsPage = () => {
  const {user, setUser} = useContext(UserContext)


  if(!user?.isAdmin) return <Navigate to="/error" />

  return (
    <>
      <Header />
      <div>SettingsPage</div>
    </>
  );
};

export default SettingsPage;
