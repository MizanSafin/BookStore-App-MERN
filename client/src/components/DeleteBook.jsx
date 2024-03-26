import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4121/book/deletebook/${id}`)
      .then((res) => {
        if (res.data.success === true) {
          navigate("/books");
        }
      })
      .catch((err) => console.log(err));
  }, []);
}

export default DeleteBook;
