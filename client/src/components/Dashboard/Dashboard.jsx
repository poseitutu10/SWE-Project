import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="main flex flex-row h-screen w-full overflow-hidden">
        <Sidebar />
        <div className="main flex flex-1 overflow-y-auto">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
