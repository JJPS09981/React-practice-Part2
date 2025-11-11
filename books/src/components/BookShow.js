import { useState, useContext } from "react";
import BookEdit from "./BookEdit.js";
import BookContext from "../context/books.js";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BookContext);

  const handleEdit = function () {
    setShowEdit(!showEdit);
  };

  const handleDelete = function () {
    deleteBookById(book.id);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) content = <BookEdit onSubmit={handleSubmit} book={book} />;

  return (
    <div className="book-show">
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      ></img>
      <div>{content}</div>

      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          編輯
        </button>
        <button className="delete" onClick={handleDelete}>
          刪除
        </button>
      </div>
    </div>
  );
}
export default BookShow;
