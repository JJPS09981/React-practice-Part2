import { createContext, useState } from "react";
import axios from "axios";

const BookContext = createContext();
function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async function () {
    const res = await axios.get(`http://localhost:3001/books`);
    setBooks(res.data);
  };
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

  const CreatBook = async (title) => {
    if (title !== "") {
      const res = await axios.post(`http://localhost:3001/books`, { title });

      const updateBooks = [...books, res];
      setBooks(updateBooks);
    }
  };
  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    CreatBook,
    fetchBooks,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}
export { Provider };
export default BookContext;
