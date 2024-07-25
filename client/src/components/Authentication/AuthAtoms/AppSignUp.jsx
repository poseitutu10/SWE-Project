import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AppSignUp = () => {
  const [appForm, setAppForm] = useState({
    student_id: "",
    first_name: "",
    last_name: "",
    email: "",
    programme: "",
    year: "",
    birth_date: "",
    gender: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    setAppForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5500/create-applicant", appForm)
      .then((res) => {
        if (res.data === "success") {
          navigate("/login");
        }
        // console.log(res);
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
        <div className="name flex gap-5">
          <div className="firstName w-1/2">
            <label htmlFor="firstname" className="text-md">
              First name
            </label>
            <br />
            <input
              type="text"
              id="firstname"
              name="first_name"
              value={appForm.first_name}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
          <div className="lastName w-1/2">
            <label htmlFor="lastname" className="text-md">
              Last name
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              name="last_name"
              value={appForm.last_name}
              onChange={handleChange}
              required
              id="lastname"
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email" className="text-md">
            Email
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter email address"
            value={appForm.email}
            onChange={handleChange}
            name="email"
            required
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          />
        </div>
        <div className="name flex gap-5">
          <div className="studentId w-1/2">
            <label htmlFor="studentId" className="text-md">
              Student ID
            </label>
            <br />
            <input
              type="text"
              name="student_id"
              value={appForm.student_id}
              id="studentId"
              onChange={handleChange}
              placeholder="Enter your student ID"
              minLength={8}
              maxLength={8}
              required
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
          <div className="year w-1/2">
            <label htmlFor="year" className="text-md">
              Year of student
            </label>
            <br />
            <select
              name="year"
              id="year"
              value={appForm.year}
              onChange={handleChange}
              required
              className="text-gray-500 outline-gray-500  border p-2 rounded-lg w-full"
            >
              <option value="">--Year--</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
            </select>
          </div>
        </div>
        <div className="programme">
          <label htmlFor="programme" className="text-md">
            Programme of study
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your programme of study"
            value={appForm.programme}
            onChange={handleChange}
            name="programme"
            required
            className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
          />
        </div>
        <div className="dob-gender flex gap-5">
          <div className="dob w-1/2">
            <label htmlFor="dob" className="text-md">
              Date of birth
            </label>
            <br />
            <input
              type="date"
              name="birth_date"
              onChange={handleChange}
              value={appForm.birth_date}
              id="dob"
              required
              className="text-gray-500 outline-gray-500 border p-2 rounded-lg w-full"
            />
          </div>
          <div className="gender w-1/2">
            <label htmlFor="gender" className="text-md">
              Gender
            </label>
            <br />
            <select
              name="gender"
              onChange={handleChange}
              value={appForm.gender}
              id="gender"
              required
              className="text-gray-500 outline-gray-500  border p-2 rounded-lg w-full"
            >
              <option value="">--Gender--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="password">
          <label htmlFor="password" className="text-md">
            Password
          </label>
          <br />
          <input
            type="password"
            onChange={handleChange}
            value={appForm.password}
            rs
            placeholder="Enter your password"
            name="password"
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
            <span className="text-[#4640DE]">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AppSignUp;
