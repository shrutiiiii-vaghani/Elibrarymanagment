import React, { useState } from 'react';
 

const EditBookForm = ({ book, onEditBook }) => {
  const [updatedBook, setUpdatedBook] = useState({ ...book });

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditBook(updatedBook);  
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop:'20px',textAlign:'center'}}>
      <h2>Edit Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={updatedBook.title}
        onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
        style={{padding:"10px"}}
      /><br/><br/>
      <input
        type="text"
        placeholder="Author"
        value={updatedBook.author}
        onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })}
        style={{padding:"10px"}}
      /><br/><br/>
      <input
        type="text"
        placeholder="Genre"
        value={updatedBook.genre}
        onChange={(e) => setUpdatedBook({ ...updatedBook, genre: e.target.value })}
        style={{padding:"10px"}}
      /><br/><br/>
      <input
        type="date"
        value={updatedBook.publicationDate}
        onChange={(e) => setUpdatedBook({ ...updatedBook, publicationDate: e.target.value })}
        style={{padding:"10px"}}
      /><br/><br/>
      <button type="submit" style={{padding:"10px"}}>Save Changes</button>
    </form>
  );
};

export default EditBookForm;
