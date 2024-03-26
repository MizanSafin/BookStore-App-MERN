import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const booknameRef = useRef();
  const authorRef = useRef();
  const imageUrlRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = booknameRef.current.value;
    const author = authorRef.current.value;
    const imageUrl = imageUrlRef.current.value;

    let book = { name, author, imageUrl };

    axios
      .post(`http://localhost:4121/book/add`, book, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === true) {
          navigate("/books");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-screen flex justify-center py-10 bg-fuchsia-950">
      <div className="form bg-slate-800 h-auto px-10 py-6 w-[450px] min-w-[340px]">
        <h2 className="text-slate-300 text-2xl mb-2">Add book : </h2>
        <form
          className="flex gap-3 flex-col"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label
              htmlFor="name"
              className="block pb-2 text-slate-300 mb-0 p-0"
            >
              name :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="text"
              placeholder="book name .."
              ref={booknameRef}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="author"
              className="block pb-2 text-slate-300 mb-0 p-0"
            >
              Author :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="text"
              placeholder="author name .."
              ref={authorRef}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="imageUrl"
              className="block pb-2 text-slate-300 mb-0 p-0"
            >
              Image Url :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="text"
              placeholder="imageUrl  .."
              ref={imageUrlRef}
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

export default AddBook;
