import { useEffect, useState } from "react";

export default function BookList() {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);

  const loadBookList = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=" +
        page
    );
    const data = await response.json();
    setBookList(data);
  };

  useEffect(() => {
    loadBookList();
  }, []);

  return (
    <>
      <div className="book_list">
        <h2>Book List</h2>
        <div className="page">
          <button
            onClick={() => {
              page > 1 && setPage(page - 1);
              loadBookList();
            }}
          >
            &lt; &lt;
          </button>
          &nbsp; {page} &nbsp;
          <button
            onClick={() => {
              setPage(page + 1);
              loadBookList();
            }}
          >
            &gt; &gt;
          </button>
        </div>
        <br />

        {bookList.map((book) => (
          <div className="book_item" key={book.id}>
            {book.title}
            <p>Price:{book.price}</p>
            <img src={book.image} alt="" />
            <hr />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
