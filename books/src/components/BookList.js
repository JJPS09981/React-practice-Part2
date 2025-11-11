import { useContext } from "react";
import BookShow from "./BookShow.js";
import BookContext from "../context/books.js";

function BookList() {
  const { books } = useContext(BookContext);
  console.log(books);

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderBooks}</div>;
}
export default BookList;
