import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardContext } from "../../../utils/AllOverContext";
import axios from "axios";

const CompSignUp = () => {
  const { handleSignIn } = useContext(DashboardContext);

  const [companyForm, setComanyForm] = useState({
    companyName: "",
    companyLogo: "",
    companyWebsite: "",
    description: "",
    companyLicense: "",
    companyFounded: "",
    companySpecialities: "",
    companyEmail: "",
    companyPassword: "",
  });

  const handleChange = (event) => {
    setComanyForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the server
    axios
      .post("http://localhost:5500/create-company", companyForm)
      .then((res) => {
        if(res.data === "success"){
          navigate("/dashboard")
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="alt">
      <form
        className=" flex flex-col gap-3"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="companyName">
          <label htmlFor="companyname" className="text-md">
            Company name
          </label>
          <br />
          <input
            type="text"
            id="companyname"
            value={companyForm.companyName}
            name="companyName"
            onChange={handleChange}
            required
            placeholder="Enter your company's name"
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          />
        </div>
        <div className="name flex gap-5">
          <div className="urlLogo w-1/2">
            <label htmlFor="urlLogo" className="text-md">
              Logo <span className="text-gray-500">(URL)</span>
            </label>
            <br />
            <input
              type="text"
              id="urlLogo"
              name="companyLogo"
              onChange={handleChange}
              value={companyForm.companyLogo}
              required
              placeholder="Enter indusry of company"
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
          <div className="companyWebsite w-1/2">
            <label htmlFor="companyWebsite" className="text-md">
              Company Website
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your company's website"
              value={companyForm.companyWebsite}
              name="companyWebsite"
              onChange={handleChange}
              required
              id="companyWebsite"
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="description">
          <label htmlFor="description" className="text-md">
            Description
          </label>
          <br />
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={companyForm.description}
            rows="5"
            required
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          ></textarea>
        </div>
        <div className="license flex gap-5">
          <div className="license w-1/2">
            <label htmlFor="license" className="text-md">
              License ID
            </label>
            <br />
            <input
              type="text"
              id="license"
              name="companyLicense"
              onChange={handleChange}
              value={companyForm.companyLicense}
              placeholder="Enter your student ID"
              minLength={8}
              maxLength={8}
              required
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
          <div className="founded w-1/2">
            <label htmlFor="founded" className="text-md">
              Date Founded
            </label>
            <br />
            <input
              type="date"
              id="founded"
              onChange={handleChange}
              value={companyForm.companyFounded}
              name="companyFounded"
              required
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="specialities">
          <label htmlFor="specialities" className="text-md">
            Specialities
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your specialities of study"
            onChange={handleChange}
            value={companyForm.companySpecialities}
            name="companySpecialities"
            required
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          />
        </div>
        <div className="dob-gender">
          <div className="email">
            <label htmlFor="email" className="text-md">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={companyForm.companyEmail}
              name="companyEmail"
              required
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password" className="text-md">
            Password
          </label>
          <br />
          <input
            type="password"
            name="companyPassword"
            onChange={handleChange}
            value={companyForm.companyPassword}
            placeholder="Enter your password"
            minLength={8}
            required
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          />
        </div>
        <button className="border bg-[#4640DE] font-semibold text-white text-lg w-full p-2 hover:bg-transparent hover:text-[#4640DE] hover:border-[#4640DE] transition duration-450 ease-in-out">
          Continue
        </button>
      </form>
      <div className="log-coninue my-3 flex flex-col gap-5">
        <p>
          Already have an account?
          <Link to="/login">
            <span className="text-[#4640DE]" onClick={() => handleSignIn(2)}>
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CompSignUp;
