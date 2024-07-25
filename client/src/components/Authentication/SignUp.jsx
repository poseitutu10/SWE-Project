import logo from "../../assets/Frame 3.png";
import LeftSign from "./LeftSign";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DashboardContext } from "../../utils/AllOverContext";
import AppSignUp from "./AuthAtoms/AppSignUp";
import CompSignUp from "./AuthAtoms/CompSignUp";

const SignUp = () => {
  const { toggleSignUp, handleSignIn, handleSignUp } =
    useContext(DashboardContext);
  return (
    <>
      <div className="main flex h-screen flex-row w-full">
        <LeftSign />

        <div className="right mainSignUp flex justify-center items-center w-full lg:w-1/2 ">
          <div className="right-main w-full  sm:w-4/5 md:w-3/5 p-10 lg:p-0">
            <Link to="/">
              <header className="flex gap-3 justify-center  lg:hidden">
                <img src={logo} />
                <h2 className="text-2xl font-semibold">InternHub</h2>
              </header>
            </Link>

            <div className="signIn flex flex-col gap-5 justify-center items-center">
              <div className="cat flex gap-5 justify-center items-center mt-5">
                <p
                  className={`text-[#4640DE] text-lg font-semibold cursor-pointer px-8 py-3 ${
                    toggleSignUp === 1 ? "bg-blue-600  text-white" : ""
                  } `}
                  onClick={() => {
                    handleSignUp(1);
                    console.log(handleSignIn(1));
                  }}
                >
                  Job Seeker
                </p>

                <p
                  className={`text-[#4640DE] text-lg font-semibold cursor-pointer hover:bg-blue-200 px-8 py-3 ${
                    toggleSignUp === 2 ? "bg-blue-600 text-white" : ""
                  } `}
                  onClick={() => {
                    handleSignUp(2);
                    handleSignIn(2);
                  }}
                >
                  Company
                </p>
              </div>
              {toggleSignUp === 1 ? (
                <h2 className="text-4xl my-5 font-serif font-bold max-w-sm">
                  Get more opportunities
                </h2>
              ) : (
                <h2 className="text-4xl my-5 font-serif font-bold max-w-mlg text-center">
                  Looking to train students in their field of study
                </h2>
              )}
            </div>
            <div className="switch">
              {toggleSignUp === 1 ? <AppSignUp /> : <CompSignUp />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
