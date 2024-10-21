import { useState, useEffect } from 'react';

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  // Load books from local storage when the app starts
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      alert("Loading books from local storage...");
      setBooks(JSON.parse(storedBooks));
    } else {
      // Initialize with default values if no data in local storage
      const defaultBooks = [
        { id: 1, title: 'Book One', author: 'Author A', genre: 'Fiction', publicationDate: '2020-01-01' },
        { id: 2, title: 'Book Two', author: 'Author B', genre: 'Non-Fiction', publicationDate: '2021-05-12' },
      ];
      console.log("No stored books, setting default books...");
      setBooks(defaultBooks);
    }
  }, []);

  // Save books to local storage whenever the books array changes
  useEffect(() => {
    if (books.length > 0) {
      console.log("Saving books to local storage...");
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books]);

  const addBook = (newBook) => {
    const newBookWithId = { id: books.length + 1, ...newBook };
    setBooks([...books, newBookWithId]);
  };

  const editBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  const borrowBook = (book) => alert(`This item is Borrowed: ${book.title}`);
  const returnBook = (book) => alert(`This item is Returned: ${book.title}`);

  return { books, addBook, editBook, borrowBook, returnBook };
};
