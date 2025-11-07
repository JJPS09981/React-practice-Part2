import { useState } from "react";
import BookEdit from "./BookEdit.js";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = function () {
    setShowEdit(!showEdit);
  };

  const handleDelete = function () {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
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
