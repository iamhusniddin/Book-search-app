import React, { useState } from "react";
import Modal from "./Modal";

function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  console.log(book);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 pt-10 container">
        {book.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let amount =
            item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

          if (thumbnail != undefined && amount != undefined) {
            return (
              <>
                <div
                  onClick={() => {
                    setShow(true), setBookItem(item);
                  }}
                  className="cursor-pointer sm:w-[230px] w-[210px] bg-white m-auto flex flex-col gap-3  border-2 rounded-xl p-4 shadow-lg hover:scale-105 duration-500 active:scale-95"
                >
                  <img
                    className=" sm:h-[220px] w-[200px] h-[200px] sm:m-0 m-auto rounded-xl"
                    src={thumbnail}
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-center text-xl sm:h-[110px] font-semibold font-cursive ">
                      {item.volumeInfo.title}
                    </h3>
                    <p className="text-center text-md bg-blue-200 rounded-md ">
                      ${amount}
                    </p>
                  </div>
                </div>
                <Modal
                  show={show}
                  item={bookItem}
                  onClose={() => setShow(false)}
                />
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Card;
