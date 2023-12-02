import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";

let URL = "https://openlibrary.org/search.json?title=";
let AppContext = React.createContext();

let AppProvider = ({ children }) => {
  let [searchTerm, setSearchTerms] = useState("The lost world");
  let [books, setBooks] = useState([]);
  let [loading, setLoading] = useState(true);
  let [resultTitle, setResultTitle] = useState("");

  let fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch(`${URL} ${searchTerm}`);
      let data = await response.json();
      let { docs } = data;
      console.log(docs);

      if (docs) {
        let newBooks = docs.slice(0, 20).map((bookSingle) => {
          let {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);

        if (newBooks.title > 1) {
          setResultTitle("Your Search Results");
        } else {
          setResultTitle("No Search result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search result Found!");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{ loading, books, setSearchTerms, resultTitle, setResultTitle }}
    >
      {children}
    </AppContext.Provider>
  );
};

export let useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
