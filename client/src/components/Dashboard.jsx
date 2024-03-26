import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [students, setStudents] = useState(0);
  const [books, setBooks] = useState(0);
  const [admin, setAdmin] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:4121/api/v1/dashboard`)
      .then((res) => {
        if (res.data.success === true) {
          setStudents(res.data.students);
          setAdmin(res.data.admin);
          setBooks(res.data.books);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-green-300 min-h-screen flex flex-col gap-5 pt-10 items-center">
      <div className="dashboard bg-green-500 p-5 w-[250px] rounded-md text-fuchsia-950 flex flex-col gap-3 text-2xl">
        <h2>Total Students :</h2>
        <h4>{students}</h4>
      </div>
      <div className="dashboard bg-green-500 p-5 w-[250px] rounded-md text-fuchsia-950 flex flex-col gap-3 text-2xl">
        <h2>Total books :</h2>
        <h4>{books}</h4>
      </div>
      <div className="dashboard bg-green-500 p-5 w-[250px] rounded-md text-fuchsia-950 flex flex-col gap-3 text-2xl">
        <h2>Total admin :</h2>
        <h4>{admin}</h4>
      </div>
    </div>
  );
}

export default Dashboard;
