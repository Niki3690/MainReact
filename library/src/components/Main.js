import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { AppProvider } from "./Context";
import Home from "./Home";
import About from "./About";
import BookList from "./BookList";
import Book from "./Book";
import Loader from "./Loader";
import SearchForm from "./SearchForm";
import BookDetails from "./BookDetails";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/Book/:id" element={<Book />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/searchform" element={<SearchForm />} />
            <Route path="/bookdetails" element={<BookDetails />} />
            <Route path="/header" element={<Header />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default Main;
