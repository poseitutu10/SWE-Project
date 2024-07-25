import { useContext, useState } from "react";
import logo from "../../assets/Frame 3.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaRegListAlt } from "react-icons/fa";
import { GrStakeholder } from "react-icons/gr";
import { DashboardContext } from "../../utils/AllOverContext";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { active, handleActive } = useContext(DashboardContext);

  return (
    <>
      <div className="side-main bg-[#F8F8FD] h-[80px]  w-full md:w-1/5 md:h-screen fixed">
        <header className="gap-2  md:flex py-5 flex-col px-">
          <div className="top flex m-auto items-center gap-3 mt-5 mb-10">
            <img src={logo} />
            <p className="text-2xl font-semibold">InternHub</p>
          </div>
          <div className="options md:flex flex-col">
            <div
              className={`dashboard  py-4 px-16 font-semibold flex items-center gap-5 cursor-pointer  ${
                active === 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleActive(1)}
            >
              <MdOutlineSpaceDashboard size={25} />
              <h2 className={`text-lg md:block`}>Dashboard</h2>
            </div>

            <div
              className={`dashboard  py-4 px-16 font-semibold flex items-center gap-5 cursor-pointer  ${
                active === 2 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleActive(2)}
            >
              <ImProfile size={25} />
              <h2 className="text-lg md:block">Profile</h2>
            </div>

            <div
              className={`dashboard  py-4 px-16 font-semibold flex items-center gap-5 cursor-pointer  ${
                active === 3 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleActive(3)}
            >
              <GrStakeholder size={25} />
              <h2 className="text-lg">Application</h2>
            </div>

            <div
              className={`dashboard  py-4 px-16 font-semibold flex items-center gap-5 cursor-pointer  ${
                active === 4 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleActive(4)}
            >
              <FaRegListAlt size={25} />
              <h2 className="text-lg">Internship Lists</h2>
            </div>
          </div>
        </header>
        <header className="md:hidden block">
          <div className="mobile-header flex gap-3 items-center justify-between">
            <motion.ul className="">
              <li>
                <HiOutlineMenuAlt2
                  size={26}
                  className="cursor-pointer"
                  onClick={() => setToggleMenu((prev) => !prev)}
                />
                <nav
                  className={`${
                    toggleMenu ? "hover:block" : "hidden"
                  } relative transition duration-1000 ease-in-out`}
                >
                  <ul className="mt-10 absolute flex flex-col gap-2">
                    <li className="bg-gray-100 p-3 cursor-pointer rounded-lg">
                      Dashboard
                    </li>
                    <li className="bg-gray-100 p-3 cursor-pointer rounded-lg">
                      Messages
                    </li>
                    <li className="bg-gray-100 p-3 cursor-pointer rounded-lg">
                      Applications
                    </li>
                    <li className="bg-gray-100 p-3 cursor-pointer rounded-lg">
                      Find Jobs
                    </li>
                  </ul>
                </nav>
              </li>
            </motion.ul>

            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
        </header>
      </div>
    </>
  );
};

export default Sidebar;
