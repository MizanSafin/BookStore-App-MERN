import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogOut({ setRole }) {
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4121/auth/logout`)
      .then((res) => {
        setRole("");
        if (res.data.logout) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
}

export default LogOut;
