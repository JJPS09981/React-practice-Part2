import { useState } from "react";
import BookCreat from "./components/BookCreat.js";
import BookList from "./components/BookList.js";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = function (id, newTitle) {
    const updateBooks = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
    });

    setBooks(updateBooks);
  };

  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };
  const handleCreatBook = (title) => {
    const updateBooks = [
      ...books,
      { id: (Math.random() * 99999).toFixed(0), title: title },
    ];

    if (title !== "") setBooks(updateBooks);
  };

  return (
    <div className="app">
      <h1>書籍清單</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreat onSubmit={handleCreatBook} />
    </div>
  );
}
export default App;
