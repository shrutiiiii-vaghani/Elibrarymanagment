import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';
import AddBookForm from '../components/AddBookForm';
import EditBookForm from '../components/EditBookForm';
import { useBooks } from '../hooks/useBooks';

const HomePage = () => {
  const { books, addBook, editBook, borrowBook, returnBook } = useBooks();
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedBook) => {
    editBook(updatedBook);  // Update the book with new details
    setIsEditing(false);    // Exit edit mode
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      height: '140vh',  
      backgroundImage: 'url("https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }}>
    <div className="home-page">
      <h1 style={{textAlign:"center",color:"white"}}>E-Library Management</h1>

      {/* Add Book Form */}
      <AddBookForm onAddBook={addBook} style={{textAlign:"center"}} />
      
      {/* Book List */}
      <BookList books={books} onBookClick={setSelectedBook}/>

      
      {/* Display either Book Detail or Edit Form */}
      {isEditing ? (
        <EditBookForm book={selectedBook} onEditBook={handleEdit} />
      ) : (
        <BookDetail
          book={selectedBook}
          onBorrow={borrowBook}
          onReturn={returnBook}
          onEdit={() => setIsEditing(true)} 
        />
      )}
      </div>
      </div>
      
  );
};

export default HomePage;
