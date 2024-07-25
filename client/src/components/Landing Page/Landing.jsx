import logo from "../../assets/Frame 3.png";
import job from "../../assets/Group.png";
import { FiSearch } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { SiIntel } from "react-icons/si";
import amd from "../../assets/amd-logo-1.png";
import voda from "../../assets/vodafone-2017-logo.png";
import intel from "../../assets/Landing Page/Mobile/intel-3.png";
import tesla from "../../assets/tesla-9 1.png";
import talkit from "../../assets/talkit 1.png";
import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";
import imageBackground from "../../../public/bg-image.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import rect from "./assets/rect.png";
import ExploreContainer from "./component/ExploreContainer";
import { exploreCat } from "./data/data";

const Landing = () => {
  return (
    <>
      <div className="main  text-black w-full flex flex-col relative">
        <img
          src={imageBackground}
          className="h-full hidden md:block w-1/2  right-0 -z-10 absolute"
        />
        <header className="flex justify-between items-center px-12 py-6">
          <div className="left flex gap-2">
            <img src={logo} alt="logo" />
            <h2 className="text-2xl">InternHub</h2>
          </div>
          <nav className="hidden md:flex justify-center items-center">
            <ul className=" flex text-2md gap-5">
              <li className="cursor-pointer text-blue-700 text-lg">Home</li>
              <li className="cursor-pointer text-blue-700 text-lg">About</li>
              <li className="cursor-pointer text-blue-700 text-lg">Browse Companies</li>
              <li className="cursor-pointer text-blue-700 text-lg">Contact Us</li>
            </ul>
          </nav>
          <div className="end flex justify-center items-center gap-5">
            <Link to="/login">
              <p className="text-purple-500 border-r py-2 pr-3 cursor-pointer">
                Login
              </p>
            </Link>

            <Link to="/signup">
              <p className="bg-purple-500 text-white rounded-md px-4 py-3 cursor-pointer text-sm">
                Sign Up
              </p>
            </Link>
          </div>
        </header>
        <main className=" flex flex-col gap-3 justify-center my-10 md:pl-12">
          <motion.h1
            className="text-5xl mt-3 font-bold md:text-7xl max-w-lg text-center md:text-start"
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 50,
            }}
            initial={{
              x: -500,
              opacity: 0,
            }}
          >
            Discover more than{" "}
            <span className="text-purple-500">1000+ Internship</span>
            <img src={job} className="hidden md:block" />
          </motion.h1>
          <motion.p
            className="max-w-lg text-center text-xl font-semibold md:text-start"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, type: "spring", damping: 80, delay: 1 }}
          >
            Great platform for the internship seeker that searching for new
            career heights and passionate about startups.
          </motion.p>
          <motion.div
            className="search sm:w-2/3 bg-white  my-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", damping: 50, duration: 1, delay: 2 }}
          >
            <form className="flex flex-col justify-center gap-5 md:flex-row md:justify-evenly md:text-2xl border-2 border-spacing-2 border-neutral-400 px-10 py-5 rounded-md ">
              <div className="title flex gap-3 items-center w-full">
                <FiSearch color="gray" size={35} className="" />
                <input
                  type="text"
                  name="title"
                  placeholder="Job title or keyword"
                  className="border-b-2 text-lg py-3 px-2 border-neutral-50 focus:border-neutral-100  outline-none text-gray-400 w-full sm:max-w-56"
                />
              </div>
              <div className="location flex gap-3  items-center w-full">
                <TiLocationOutline color="gray" size={37} className="" />
                <select
                  name="Location"
                  className="text-gray-400 border-b-2 border-neutral-50 focus:border-r-neutral-100 py-3 px-2 outline-none text-lg w-full sm:max-w-56"
                >
                  <option value="Ghana">Ghana</option>
                  <option value="UnitedState">United State</option>
                  <option value="UnitedKingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <button className="bg-purple-600 hover:bg-purple-500 duration-500 p-5 sm:px-2 text-lg rounded-md text-white">
                Search
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3, type: "spring", damping: 50 }}
          >
            <p>Popular : UI Designer, UX Researcher, Android, Admin</p>
            <h2 className="text-2xl md:my-5">Companies we helped grow</h2>
            <div className="bg-white p-1 my-2 md:my-2 md:p-3 md:max-w-3xl flex gap-5">
              <img src={voda} />
              <img src={intel} />
              <img src={amd} />
              <img src={talkit} className="hidden md:block" />
              <img src={tesla} className="hidden md:block" />
            </div>
          </motion.div>
        </main>
      </div>
      <div className="companies px-10 py-5 bg-[#F8FAFC] lg:px-12">
        <div className="explore flex justify-between items-center ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>
          <Link to="/login">
            <div className="explore-right flex items-center gap-3 cursor-pointer">
              <p className="font-semibold text-purple-800 hover:text-purple-600 flex">
                Show <span className="hidden md:block">all internships</span>
              </p>
              <FaLongArrowAltRight size={27} color="rgb(107, 33, 168)" />
            </div>
          </Link>
        </div>
        <div className="explore-container my-10 grid grid-cols-1 grid-cols-[repeat(1fr, 1)] gap-5 sm:grid-cols-[repeat(1fr, 2)] sm:grid-cols-2 lg:grid-cols-4 lg:grid-cols-[repeat(1fr, 4)]">
          {exploreCat.map((cont) => {
            return (
              <ExploreContainer
                key={cont.id}
                icon={cont.icon}
                value={cont.value}
                name={cont.name}
              />
            );
          })}
        </div>
        <div className="start-career">
          <img src={rect} className="w-full my-10" />
          <div className="content hidden">
            <h2>Start posting jobs today</h2>
            <p>Start posting only if you have company license for only $100</p>
          </div>
        </div>
      </div>
      <footer className="companies px-10 py-20  bg-[#202430]  text-white flex gap-5 justify-evenly"                                                                                                                                                                                                                                                                                                                                                                                                >
        <div className="footer-wrapper flex gap-5 justify-evenly">
          <div className="left flex flex-col gap-2">
            <div className="footer flex gap-2">
              <img src={logo} alt="logo" />
              <h2 className="text-2xl">InternHub</h2>
            </div>

            <p className="text-gra-500 max-w-sm">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          <div className="about flex gap-20">
            <div className="about flex flex-col gap-3">
              <h2 className="font-semibold text-lg">About</h2>
              <p className="text-gray-500">Companies</p>
              <p className="text-gray-500">Pricing</p>
              <p className="text-gray-500">Terms</p>
              <p className="text-gray-500">Advice</p>
              <p className="text-gray-500">Privacy Policy</p>
            </div>
            <div className="about flex flex-col gap-3">
              <h2 className="font-semibold text-lg">Resources</h2>
              <p className="text-gray-500">Help Docs</p>
              <p className="text-gray-500">Guide</p>
              <p className="text-gray-500">Updates</p>
              <p className="text-gray-500">Contact Us</p>
            </div>
            <div className="about flex flex-col gap-3">
              <h2 className="font-semibold text-lg">Article</h2>
              <p className="text-gray-500">Help Docs</p>
              <p className="text-gray-500">Guide</p>
              <p className="text-gray-500">Updates</p>
              <p className="text-gray-500">Contact Us</p>
            </div>
            <div className="about flex flex-col gap-3">
              <h2 className="font-semibold text-lg">Blog</h2>
              <p className="text-gray-500">Help Docs</p>
              <p className="text-gray-500">Guide</p>
              <p className="text-gray-500">Updates</p>
              <p className="text-gray-500">Contact Us</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
