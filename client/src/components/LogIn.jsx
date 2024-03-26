import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function LogIn({ setRole }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const roleref = useRef();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    let role = roleref.current.value;

    axios
      .post(
        `http://localhost:4121/auth/login`,
        { username, password, role },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.success && res.data.role === "admin") {
          navigate("/dashboard");
          setRole("admin");
        }
        if (res.data.success && res.data.role === "student") {
          navigate("/");
          setRole("student");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex w-screen  justify-center bg-fuchsia-950 items-center min-h-[350px] py-10">
      <div className="login-container text-slate-700 bg-green-600  h-full w-full max-w-[350px] py-5 px-7 rounded-lg">
        <h2 className="mx-auto text-3xl text-center mb-5 leading-relaxed text-slate-100">
          Lognin form
        </h2>
        <div className="form-group mt-4">
          <label htmlFor="username">User name :</label> <br />
          <input
            className="bg-slate-100 border-none outline-0 px-5 py-1 rounded-md mt-3 "
            type="text"
            ref={usernameRef}
            placeholder="Enter user Name."
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="password">User password :</label> <br />
          <input
            className="bg-slate-100 border-none outline-0 px-5 py-1 rounded-md mt-3 "
            type="password"
            placeholder="Enter password here."
            ref={passwordRef}
          />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="role">Role :</label> <br />
          <select
            name="role"
            id="role"
            className="min-w-[90px] mt-2 rounded-sm py-1"
            ref={roleref}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>

        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className="bg-green-900 px-7 py-2 rounded-md mt-5 cursor-pointer text-slate-50"
        />
      </div>
    </div>
  );
}

export default LogIn;
