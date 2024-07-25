import { useContext } from "react";
import { DashboardContext } from "../../../../utils/AllOverContext";

const TopHeader = () => {

    const { details, handleDetails } = useContext(DashboardContext);
  return (
    <>
      <div className="top-header px-10 py-4 border-b flex justify-between">
        <div className="company">
          <h2 className="text-lg font-semibold text-gray-500">Company</h2>
          <h2 className="text-xl font-semibold">
            {details === null ? "Loading..." : details.company_name}
          </h2>
        </div>
        <button className="bg-blue-500 text-white py-2 px-7 text-sm border border-blue-500 hover:bg-transparent hover:text-blue-500 transition duration-300 ease-in-out">
          Post an internship
        </button>
      </div>
    </>
  );
};

export default TopHeader;
