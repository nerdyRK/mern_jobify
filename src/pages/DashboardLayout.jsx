import { Outlet } from "react-router-dom";
import { BigSidebar, SmallSidebar } from "../components";
import Navbar from "../components/Navbar";
import { createContext, useContext, useState } from "react";
import "../../src/App.css";

let DashboardContext = createContext();
const DashboardLayout = () => {
  const user = { name: "john" };
  let [showSidebar, setShowSidebar] = useState(false);
  let [darkMode, setDarkMode] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("log OUT");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        darkMode,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <main className="dashboard">
        {/* <h1>DashBoard</h1> */}
        {/* //* show on bigger screen */}
        <BigSidebar />
        <SmallSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
      <div className="test"></div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
