import React from "react";
import { FiSearch } from "react-icons/fi";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  const [booksData, setBooksData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCHMqIiWoX3A9EJuq6uOudKUtw05ba0VWA" +
            "&maxResults=40"
        )
        .then((res) => setBooksData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="h-screen bgImg flex justify-center">
        <div className="flex flex-col justify-center items-center gap-7 py-12 px-10">
          <h1 className="font-cursive text-4xl sm:text-6xl text-white text-center font-medium pb-[20px]">
            Find Your Book Of Choice
          </h1>
          <p className="font-cursive2 text-md sm:text-2xl text-center text-white pb-5">
            A room without books is like a body without a soul !
          </p>
          <div className="flex items-center justify-end">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
              className="rounded-3xl w-[250px] sm:w-[400px] py-2 px-3 border-2 hover:border-blue-500 "
              type="text"
              placeholder="The Lost World"
            />
            <button className="absolute pr-3">
              <FiSearch className="text-blue-700 text-xl font-bold" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">{<Card book={booksData} />}</div>
    </>
  );
}

export default Header;
