import { Link, useNavigate } from "react-router-dom";
import { DashboardContext } from "../../../utils/AllOverContext";
import { useContext, useState } from "react";
import axios from "axios";

const CompSignIn = () => {
  const { handleSignUp } = useContext(DashboardContext);
  const [incorrect, setIncorrect] = useState(false);
  const [noAccount, setNoAccount] = useState(false);

  const [CompSignIn, setCompSignIn] = useState({
    licenseId: "",
    password: "",
  });

  const handleChange = (event) => {
    setCompSignIn({ ...CompSignIn, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  // axios.defaults.withCredentials = true; // to send cookies along with the request
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5500/company-login", CompSignIn)
      .then((res) => {
        if (res.data === "success") {
          navigate("/company");
        } else if (res.data === "No account created") {
          setNoAccount(true);
          setTimeout(() => {
            setNoAccount(false);
          }, 3000);
          console.log("No account created");
        } else {
          setIncorrect(true);
          setTimeout(() => {
            setIncorrect(false);
          }, 3000);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="alt">
      <form
        className=" flex flex-col gap-4"
        method="post"
        onSubmit={handleSubmit}
      >
        {incorrect === true ? (
          <h2 className="text-red-600">Incorrect License ID or password</h2>
        ) : (
          ""
        )}
        {noAccount === true ? (
          <h2 className="text-red-600">No account exist for your ID</h2>
        ) : (
          ""
        )}
        <div className="licenseId">
          <label htmlFor="licenseId" className="text-md">
            License ID
          </label>
          <br />
          <input
            type="text"
            name="licenseId"
            value={CompSignIn.licenseId}
            onChange={handleChange}
            required
            minLength={8}
            maxLength={8}
            placeholder="Enter your License ID"
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          />
        </div>
        <div className="password">
          <label htmlFor="password" className="text-md">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={CompSignIn.password}
            required
            placeholder="Enter your password"
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          />
        </div>
        <button className="border bg-[#4640DE] font-semibold text-white text-lg w-full p-2 hover:bg-transparent hover:text-[#4640DE] hover:border-[#4640DE] transition duration-450 ease-in-out">
          Continue
        </button>
      </form>
      <div className="log-coninue my-3">
        <p>
          Don't have an account?
          <Link to="/signup">
            <span
              className="text-[#4640DE] ml-2"
              onClick={() => handleSignUp(2)}
            >
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CompSignIn;
