import express from "express";
import mysql from "mysql";
import cookieParser from "cookie-parser";
import bcrypt, { hash } from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "internhub",
});

db.connect((err) => {
  if (err) console.log(err);
  return console.log("Database connected successfully");
});

app.post("/create-applicant", (req, res) => {
  const {
    student_id,
    first_name,
    last_name,
    email,
    programme,
    year,
    birth_date,
    gender,
    password,
  } = req.body;

  bcrypt.hash(password.toString(), 10, (err, hash) => {
    if (err) throw err;

    const sql =
      "INSERT INTO Applicant_signup (`student_id`, `first_name`, `last_name`, `email`, `programme`, `year`, `birth_date`, `gender`, `password`) VALUES (?,?,?,?,?,?,?,?,?)";

    db.query(
      sql,
      [
        student_id,
        first_name,
        last_name,
        email,
        programme,
        year,
        birth_date,
        gender,
        hash,
      ],
      (err) => {
        if (err) console.log(`Error occured ${err}`);
        return res.send("success");
      }
    );
  });
});

app.post("/create-company", (req, res) => {
  const {
    companyName,
    companyLogo,
    companyWebsite,
    description,
    companyLicense,
    companyFounded,
    companySpecialities,
    companyEmail,
    companyPassword,
  } = req.body;

  bcrypt.hash(companyPassword, 10, (err, hash) => {
    if (err) throw err;

    const sql =
      "INSERT INTO Company_signup (`company_license`, `company_name`, `company_logo`, `company_website`,  `description`,`company_founded`, `company_specialities`, `company_email`, `company_password`) VALUES (?,?,?,?,?,?,?,?,?)";

    db.query(
      sql,
      [
        companyLicense,
        companyName,
        companyLogo,
        companyWebsite,
        description,
        companyFounded,
        companySpecialities,
        companyEmail,
        hash,
      ],
      (err) => {
        if (err) console.log(`Error occured ${err}`);
        return res.send("success");
      }
    );
  });
});

let present = "";

app.post("/company-login", (req, res) => {
  const { licenseId, password } = req.body;
  const sql = "SELECT * FROM Company_signup WHERE company_license =?";
  db.query(sql, [licenseId], (err, data) => {
    if (err) return res.send(err);
    if (data.length > 0) {
      present = data[0].company_license;
      bcrypt.compare(
        password.toString(),
        data[0].company_password,
        (err, response) => {
          if (err) return console.log("Error occured");
          if (response) {
            // const first_name = data[0].first_name;
            // const token = jwt.sign({ first_name }, "secret-private-key", {
            //   expiresIn: "1h",
            // });
            // res.cookie("token", token);
            res.send("success");
          } else {
            res.send("Incorrect ID or password");
          }
        }
      );
    } else {
      res.send("No account created");
    }
  });
});

app.post("/app-login", (req, res) => {
  const { student_id, password } = req.body;
  const sql = "SELECT * FROM Applicant_signup WHERE student_id=?";
  db.query(sql, [student_id], (err, data) => {
    if (err) return res.send(err);
    if (data.length > 0) {
      bcrypt.compare(password.toString(), data[0].password, (err, response) => {
        if (err) return res.send("Error at comparing password");
        if (response) {
          // const first_name = data[0].first_name;
          // const token = jwt.sign({ first_name }, "i-am-a-guru", {
          //   expiresIn: "1h",
          // });
          // res.cookie("tokenw", token);
          res.send("success");
        } else {
          res.send("Incorrect Password");
        }
      });
    } else {
      res.send("No account exist");
    }
  });
});
// app.get("/", (request, response) => {
//   response.send("Hey I am about to authenticate you");
// });

app.get("/company-details", (req, res) => {
  const sql = "SELECT * FROM Company_signup";
  db.query(sql, (err, data) => {
    if (err) return res.send("Error occured at database query");
    if (data) {
      let presented = data.find((cont) => present === cont.company_license);
      res.send(presented);
    }
  });
});

app.get("/company-applicants", (req, res) => {
  const sql = "SELECT * FROM Applicant_signup";
  db.query(sql, (err, data) => {
    if (err) return res.send("Error occured at database query");
    if (data) {
      console.log(data)

      console.log("Query success");
      res.send(data);
    }
  });
});
