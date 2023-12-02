import React from "react";
import { Link } from "react-router-dom";

const Book = (Book) => {
  return (
    <div>
      <img src={Book.cover_img} alt="cover" />
      <Link to={`/Book/${Book.id}`} {...Book}>
        <span>{Book.title}</span>
      </Link>
      <br />

      <span>Author:</span>
      <span>{Book.author.join(", ")}</span>
      <br />

      <span>Total Editions:</span>
      <span>{Book.edition_count}</span>
      <br />

      <span>First Publish-year</span>
      <span>{Book.edition_count}</span>
      <br />
    </div>
  );
};

export default Book;
