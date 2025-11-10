import { useState, useEffect } from "react";
import BookCreat from "./components/BookCreat.js";
import BookList from "./components/BookList.js";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async function () {
    const res = await axios.get(`http://localhost:3001/books`);
    setBooks(res.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async function (id, newTitle) {
    const res = await axios.patch(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updateBooks = books.map((book) => {
      if (book.id === id) return { ...book, ...res.data };
      return book;
    });

    setBooks(updateBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  //   function secureRandomString(length = 12) {
  //     const chars =
  //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     const array = new Uint32Array(length);
  //     crypto.getRandomValues(array); // 更隨機、更安全
  //     return Array.from(array, (x) => chars[x % chars.length]).join("");
  //   }

  const handleCreatBook = async (title) => {
    if (title !== "") {
      const res = await axios.post(`http://localhost:3001/books`, { title });

      const updateBooks = [...books, res];
      setBooks(updateBooks);
      console.log(updateBooks);
    }
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
