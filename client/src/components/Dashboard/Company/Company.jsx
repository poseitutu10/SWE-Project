import Sidebar from "../Sidebar";
import CompanyMain from "./CompanyMain";
import CompanySidebar from "./CompAtoms/CompanySidebar";

const Company = () => {
  return (
    <>
      <div className="main flex flex-row  h-screen w-full overflow-hidden md:flex-col">
        <CompanySidebar />
        <div className="main flex flex-1 overflow-y-auto ">
          <CompanyMain />
        </div>
      </div>
    </>
  );
};

export default Company;
