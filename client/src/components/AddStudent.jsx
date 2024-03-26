import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rollRef = useRef();
  const gradeRef = useRef();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const roll = rollRef.current.value;
    const grade = gradeRef.current.value;
    let student = { username, password, roll, grade };

    axios
      .post(`http://localhost:4121/student/register`, student, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === true) {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-screen flex justify-center py-10 bg-fuchsia-950">
      <div className="form bg-slate-800 h-auto px-10 py-6 w-[450px] min-w-[340px]">
        <h2 className="text-slate-300 text-2xl mb-2">
          Add student /register :{" "}
        </h2>
        <form
          className="flex gap-3 flex-col"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label
              htmlFor="username"
              className="block pb-2 text-slate-300 mb-0 p-0"
            >
              Username :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="text"
              placeholder="User name .."
              ref={usernameRef}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="password"
              className="block pb-2 text-slate-300 mb-0 p-0"
            >
              Password :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="password"
              placeholder="Password .."
              ref={passwordRef}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="roll"
              className="block pb-2 text-slate-300 mb-0 p-0"
            >
              Roll :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="text"
              placeholder="Roll no .."
              ref={rollRef}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="grade"
              className="block pb-2 text-slate-300 mb-0 p-0"
            >
              Grade :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="text"
              placeholder="Grade .."
              ref={gradeRef}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="mt-3 w-[200px] bg-green-500 px-5 rounded text-gray-500 cursor-pointer hover:text-slate-900 py-2"
          />
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
