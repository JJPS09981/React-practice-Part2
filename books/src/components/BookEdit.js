import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = function (e) {
    setTitle(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>編輯</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">更新</button>
    </form>
  );
}
export default BookEdit;
