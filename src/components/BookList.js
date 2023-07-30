import BookShow from "./BookShow";

// eslint-disable-next-line react/prop-types
export default function BookList({ books, onDelete, onEdit }) {
  // eslint-disable-next-line react/prop-types
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}
