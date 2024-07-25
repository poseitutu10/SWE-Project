import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../../../utils/AllOverContext";
import CompanyDashboard from "./CompAtoms/CompanyDashboard";
import CompanyProfile from "./CompAtoms/CompanyProfile";
import CompanyApplication from "./CompAtoms/CompanyApplication";
import CompanyList from "./CompAtoms/CompanyList";
import TopHeader from "./CompAtoms/TopHeader";

const CompanyMain = () => {
  const { details, handleDetails } = useContext(DashboardContext);
  const { active } = useContext(DashboardContext);

  const { stats } = useContext(DashboardContext);

  useEffect(() => {
    localStorage.setItem("stats", stats);
  });

  useEffect(() => {
    axios
      .get("http://localhost:5500/company-details/")
      .then((res) => handleDetails(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="main header-main w-full md:w-4/5 absolute right-0">
      <TopHeader />
      {active === 1 ? (
        <CompanyDashboard />
      ) : active === 2 ? (
        <CompanyProfile />
      ) : active === 3 ? (
        <CompanyApplication />
      ) : (
        <CompanyList />
      )}
    </div>
  );
};

export default CompanyMain;
