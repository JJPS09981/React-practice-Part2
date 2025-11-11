import { useState, useContext } from "react";
import "../css/index.css";
import BookContext from "../context/books";

function BookCreat() {
  const [title, setTitle] = useState("");
  const { CreatBook } = useContext(BookContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreatBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>新增書本</h3>
      <form onSubmit={handleSubmit}>
        <label>書名</label>
        <br />
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button"> 提交</button>
      </form>
    </div>
  );
}
export default BookCreat;
