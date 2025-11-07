import { useState } from "react";
import "../css/index.css";

function BookCreat({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
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
