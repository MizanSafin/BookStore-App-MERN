import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4121/book/getbook/${id}`)
      .then((res) => {
        setName(res.data.book[0].name);
        setAuthor(res.data.book[0].author);
        setImageUrl(res.data.book[0].imageUrl);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { name, author, imageUrl };
    axios
      .post(`http://localhost:4121/book/updatebook/${id}`, book)
      .then((res) => {
        if (res.data.success === true) {
          navigate("/books");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-screen flex justify-center py-10 bg-fuchsia-950">
      <div className="form bg-slate-800 h-auto px-10 py-6 w-[450px] min-w-[340px] rounded-lg">
        <h2 className="text-slate-300 text-2xl mb-2">Edit book : </h2>
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
              Name :
            </label>{" "}
            <input
              className="block px-3 py-2 w-full rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Edit book"
            className="mt-3 w-[200px] bg-green-500 px-5 rounded text-gray-500 cursor-pointer hover:text-slate-900 py-2"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;
