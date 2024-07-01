import React from "react";
import { LiaTimesSolid } from "react-icons/lia";

function Modal({ show, item, onClose }) {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button onClick={onClose} className="close">
            <LiaTimesSolid />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink}>
                <button className="btnModal">More</button>
              </a>
            </div>
          </div>
          <h4 className="description ">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
}

export default Modal;
