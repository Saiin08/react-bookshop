import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const loadBook = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=" +
        id
    );
    const data = await response.json();

    setBook(data);
  };

  useEffect(() => {
    loadBook();
  });

  return <h1>BookDetail</h1>;
}
