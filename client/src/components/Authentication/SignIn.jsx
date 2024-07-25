import LeftSign from "./LeftSign";
import logo from "../../assets/Frame 3.png";
import { useContext } from "react";
import { DashboardContext } from "../../utils/AllOverContext";
import AppSignIn from "./AuthAtoms/AppSignIn";
import CompSignIn from "./AuthAtoms/CompSignIn";

const SignIn = () => {
  const { toggleSignIn, handleSignIn } = useContext(DashboardContext);
  return (
    <>
      <div className="main flex h-screen flex-row w-full">
        <LeftSign />
        <div className="right mainSignUp flex justify-center items-center w-full lg:w-1/2 ">
          <div className="right-main w-full  sm:w-4/5 md:w-3/5 p-10 lg:p-0  ">
            <header className="flex gap-3 justify-center  lg:hidden">
              <img src={logo} />
              <h2 className="text-2xl font-semibold">InternHub</h2>
            </header>
            <div className="signIn flex flex-col gap-5 justify-center items-center">
              <div className="cat flex gap-5 justify-center items-center mt-5">
                <p
                  className={`text-[#4640DE] text-lg font-semibold cursor-pointer px-8 py-3 ${
                    toggleSignIn === 1 ? "bg-blue-600  text-white" : ""
                  } `}
                  onClick={() => handleSignIn(1)}
                >
                  Job Seeker
                </p>

                <p
                  className={`text-[#4640DE] text-lg font-semibold cursor-pointer hover:bg-blue-200 px-8 py-3 ${
                    toggleSignIn === 2 ? "bg-blue-600 text-white" : ""
                  } `}
                  onClick={() => handleSignIn(2)}
                >
                  Company
                </p>
              </div>
              {toggleSignIn === 1 ? (
                <h2 className="text-4xl font-serif my-5 font-bold max-w-md text-center">
                  Welcome Back, Dude
                </h2>
              ) : (
                <h2 className="text-4xl font-serif my-5 font-bold max-w-md text-center">
                  Welcome Back
                </h2>
              )}
            </div>
            {toggleSignIn === 1 ? <AppSignIn /> : <CompSignIn />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
