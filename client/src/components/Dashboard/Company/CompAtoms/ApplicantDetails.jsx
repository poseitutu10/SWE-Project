import { Link, useParams } from "react-router-dom";
import CompanySidebar from "./CompanySidebar";
import TopHeader from "./TopHeader";
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

import axios from "axios";

const ApplicantDetails = () => {
  const params = useParams();

  const [applicants, setApplicants] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5500/company-applicants")
      .then((res) => {
        setApplicants(
          res.data.find((cont) => cont.student_id === Number(params.studentId))
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="main flex flex-row  h-screen w-full overflow-hidden md:flex-col">
        <CompanySidebar />
        <div className="main header-main w-full md:w-4/5 absolute right-0">
          <TopHeader />
          <main className="px-10 py-5">
            <div className="upper flex items-center gap-3 ">
              <Link to="/company">
                <IoArrowBackOutline size={25} className="cursor-pointer" />
              </Link>
              <h2 className="text-2xl font-semibold">Applicant's Details</h2>
            </div>
            <div className="main">
              <div className="details border my-10 p-5 w-1/3">
                <div className="name text-4xl flex gap-5 border-b pb-5">
                  <div className="company-logo p-8 text-center border border-dashed rounded-lg">
                    <h2 className="text-gray-500">
                      {applicants && applicants.first_name[0]}
                    </h2>
                  </div>
                  <div className="rest">
                    <h2 className="capitalize">
                      {applicants && applicants.first_name}{" "}
                      {applicants && applicants.last_name}
                    </h2>
                    <h2 className="text-xl text-gray-500">Student</h2>
                    <h2 className="text-base capitalize">
                      Year: {applicants && applicants.year}
                    </h2>
                  </div>
                </div>
                <div className="rest my-5">
                  <h2 className="text-2xl mb-5">Contact</h2>
                  <div className="email flex gap-5">
                    <HiOutlineMail size={30} />
                    <div className="email-name">
                      <p className="text-lg text-gray-500">Email</p>
                      <span className="text-xl">{applicants && applicants.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ApplicantDetails;
