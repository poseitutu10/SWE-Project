import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DashboardContext = createContext({});

const AllOverContext = ({ children }) => {
  const [toggleSignUp, setToggleSignUp] = useState(1);
  const [toggleSignIn, setToggleSignIn] = useState(1);
  const [details, setDetails] = useState(null);
  const [stats, setStats] = useState({
    numberOfApplications: 0,
    numberOfInterns: 0,
    numberOfPosts: 0,
  });
  const [active, setActive] = useState(1);



  const handleDetails = (value) => {
    setDetails(value);
  };

  const handleActive = (id) => {
    setActive(id);
  };

  const handleStatsApps = () => {
    setStats((prev) => {
      return { ...prev, numberOfApplications: numberOfApplications + 1 };
    });
  };

  const handleStatsInterns = () => {
    setStats((prev) => {
      return { ...prev, numberOfInterns: numberOfInterns + 1 };
    });
  };

  const handleStatsPost = () => {
    setStats((prev) => {
      return { ...prev, numberOfPosts: numberOfPosts + 1 };
    });
  };

  const handleSignUp = (value) => {
    setToggleSignUp(value);
  };
  const handleSignIn = (number) => {
    setToggleSignIn(number);
  };


  return (
    <DashboardContext.Provider
      value={{
        toggleSignUp,
        handleSignUp,
        toggleSignIn,
        handleSignIn,
        stats,
        handleStatsApps,
        handleStatsInterns,
        handleStatsPost,
        active,
        handleActive,
        details,
        handleDetails,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default AllOverContext;
