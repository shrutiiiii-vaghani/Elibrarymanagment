import React, { useState } from 'react';
import './AddBookForm.css'; 

const AddBookForm = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newBook.title || !newBook.author || !newBook.genre || !newBook.publicationDate) {
      alert('Please fill all fields before adding the book.');
      return;
    }

    onAddBook(newBook);
    setNewBook({ title: '', author: '', genre: '', publicationDate: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={{padding:"10px"}}
        /><br/><br/>
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={{padding:"10px"}}
        /><br/><br/>
        <input
          type="text"
          placeholder="Genre"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          style={{padding:"10px"}}
        /><br/><br/>
        <input
          type="date"
          value={newBook.publicationDate}
          onChange={(e) => setNewBook({ ...newBook, publicationDate: e.target.value })}
          style={{padding:"10px"}}
        /><br/><br/>
        <button type="submit"  style={{padding:"10px"}}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
