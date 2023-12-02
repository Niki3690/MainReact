import React from "react";
import { useGlobalContext } from "./Context";
import Loader from "./Loader";
import coverImg from "../Images/cover_not_found.jpg";
import Book from "./Book"

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  let { Book, loading, resultTitle } = useGlobalContext();
  let booksWithCovers = Book.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });


 console.log(booksWithCovers);

  if (loading) return <Loader />;

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h4 className="is-size-4">{resultTitle}</h4>

              {booksWithCovers.Slice(0, 30).map((item, index) => {
                return <Book key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookList;
