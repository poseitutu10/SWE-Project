import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardContext } from "../../../utils/AllOverContext";
import axios from "axios";

const AppSignIn = () => {
  const { handleSignUp } = useContext(DashboardContext);
  const [incorrect, setIncorrect] = useState(false);
  const [noAccount, setNoAccount] = useState(false);

  const [appLogin, setAppLogin] = useState({
    student_id: "",
    password: "",
  });

  const handleChange = (event) => {
    setAppLogin((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5500/app-login", appLogin)
      .then((res) => {
        if (res.data === "success") {
          navigate("/dashboard");
        } else if (res.data === "Incorrect Password") {
          setIncorrect(true);
          setTimeout(() => {
            setIncorrect(false);
          }, 3000);
        } else {
          setNoAccount(true);
          setTimeout(() => {
            setNoAccount(false);
          }, 3000);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="alt">
      {incorrect === true ? (
        <h2 className="text-red-600">Incorrect Student ID or password</h2>
      ) : (
        ""
      )}
      {noAccount === true ? (
        <h2 className="text-red-600">No account exist for your ID</h2>
      ) : (
        ""
      )}
      <form
        className=" flex flex-col gap-4"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="student_id">
          <label htmlFor="student_id" className="text-md">
            Student ID
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your Student's ID"
            name="student_id"
            onChange={handleChange}
            required
            value={appLogin.student_id}
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
            value={appLogin.password}
            onChange={handleChange}
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
              onClick={() => handleSignUp(1)}
            >
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AppSignIn;
