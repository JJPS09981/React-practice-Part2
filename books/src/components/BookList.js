import BookShow from "./BookShow.js";

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  console.log(books);
  return <div className="book-list">{renderBooks}</div>;
}
export default BookList;
