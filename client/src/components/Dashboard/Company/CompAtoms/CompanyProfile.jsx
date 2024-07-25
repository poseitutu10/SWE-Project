import axios from "axios";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../utils/AllOverContext";
import { Link } from "react-router-dom";

const CompanyProfile = () => {
  const { details, handleDetails } = useContext(DashboardContext);

  useEffect(() => {
    axios
      .get("http://localhost:5500/company-details")
      .then((res) => {
        handleDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="profile px-10 py-5 flex gap-5 border-b">
        <div className="company-logo p-8 text-center border border-dashed">
          <h2 className="text-5xl text-gray-500">{details.company_name[0]}</h2>
        </div>
        <div className="company-name flex flex-col justify-between">
          <h2 className="text-3xl font-semibold">
            {details === null ? "Loading..." : details.company_name}
          </h2>
          <Link
            to={`https://${details.company_website}`}
            className="text-blue-700 underline"
            target="_blank"
          >
            {details === null ? <h2>Loading...</h2> : details.company_website}
          </Link>
          <div className="others flex gap-10">
            <div className="founded">
              <h2 className="text-gray-500">Founded</h2>
              <p>
                {details === null ? (
                  <h2>Loading...</h2>
                ) : (
                  details.company_founded
                )}
              </p>
            </div>
            <div className="industry">
              <h2 className="text-gray-500">Industry</h2>
              <p>
                {details === null ? (
                  <h2>Loading...</h2>
                ) : (
                  details.company_specialities
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="company-profile px-10 py-5">
        <h2 className="text-2xl">Company Profile</h2>
        <p>{details === null ? <h2>Loading...</h2> : details.description}</p>
      </div>
    </>
  );
};

export default CompanyProfile;
