import BookShow from "./BookShow.js";

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return <div>{renderBooks}</div>;
}
export default BookList;
