import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Books({ role }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4121/book/getbooks`)
      .then((res) => {
        setBooks(res.data.books);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="book">List of books:</h2>
      {books && books.length > 0 ? (
        <div className="flex gap-5 flex-wrap justify-center w-screen p-10">
          {books.map((book, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-5 justify-between w-[300px] bg-green-200 p-5 text-green-800"
              >
                <img
                  src={book.imageUrl}
                  alt=""
                  className="w-full h-[240px] object-cover"
                />
                <div className="desc flex gap-2 flex-col">
                  <h2>📛 {book.name}</h2>
                  <h5>👴{book.author}</h5>
                </div>
                {role === "admin" ? (
                  <>
                    <div className="btn-actions gap-2 justify-between flex">
                      <Link
                        to={`/update-book/${book._id}`}
                        className="bg-green-500 px-5 py-1 rounded-md text-slate-200 hover:bg-green-700"
                      >
                        edit
                      </Link>
                      <Link
                        to={`/delete-book/${book._id}`}
                        className="bg-green-500 px-5 py-1 rounded-md text-slate-200 hover:bg-green-700"
                      >
                        delete
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Books;
