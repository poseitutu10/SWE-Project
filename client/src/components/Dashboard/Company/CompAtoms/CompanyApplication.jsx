import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CompanyApplication = () => {
  const [applicants, setApplicants] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5500/company-applicants")
      .then((res) => {
        setApplicants(res.data);
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <>
      <div className="applicants px-10 py-5">
        <h2 className="text-2xl">
          Total applicants: {applicants === null ? 0 : applicants.length}
        </h2>
        {applicants && (
          <ul>
            {applicants.map((cont, index) => {
              return (
                <Link
                  to={`/company/applicant/${cont.student_id}`}
                  key={index}
                >
                  <li className="text-lg border p-3 my-3 cursor-pointer capitalize">
                    {cont.first_name} {cont.last_name}
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default CompanyApplication;
