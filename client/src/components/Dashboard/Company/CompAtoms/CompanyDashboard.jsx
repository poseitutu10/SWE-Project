import { useContext } from "react";
import { DashboardContext } from "../../../../utils/AllOverContext";

const CompanyDashboard = () => {
  const { stats, handleStatsApps, handleStatsInterns, handleStatsPosts } =
    useContext(DashboardContext);

  const date = new Date();
  const hours = date.getHours();

  return (
    <>
      <div className="main py-5 px-10">
        <h2 className="text-2xl">
          {hours < 12
            ? "Good Morning"
            : hours < 18
            ? "Good Afternoon"
            : "Good Evening"}
        </h2>
        <p className="text-gray-500">
          Here is the statistics about internship status up to date
        </p>
        <div className="main-container grid grid-cols-3 my-5 gap-5">
          <div className="container border bg-blue-700 text-white px-3 py-5  flex gap-3 items-center">
            <h2 className="text-5xl font-semibold">
              {stats.numberOfApplications}
            </h2>
            <h2 className="text-xl">Number of applications received</h2>
          </div>
          <div className="container border bg-green-500 text-white px-3 py-5  flex gap-3 items-center">
            <h2 className="text-5xl font-semibold">{stats.numberOfInterns}</h2>
            <h2 className="text-xl">Number of interns recuited</h2>
          </div>
          <div className="container border bg-blue-400  text-white px-3 py-5  flex gap-3 items-center">
            <h2 className="text-5xl font-semibold">{stats.numberOfPosts}</h2>
            <h2 className="text-xl">Number of reviewed interns</h2>
          </div>
          <div className="container border p-5  flex gap-3 flex-col">
            <h2 className="text-3xl">
              Internship{stats.numberOfPosts <= 1 ? "" : "s"} Opened
            </h2>
            <div className="open flex items-end gap-3">
              <h2 className="text-5xl font-semibold">{stats.numberOfPosts}</h2>
              <h2 className="text-xl text-gray-500">
                Number of applications received
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
