import React from 'react';

const BookDetail = ({ book, onBorrow, onReturn, onEdit }) => {
  if (!book) return <div></div>;

  return (
    <div
      className="book-detail"
    //   style={{
    //     textAlign: 'center', // Center text
    //     padding: '20px',
    //     color:'white' // Optional padding
    //   }}
    style={{
        textAlign: 'center',
        marginTop:'20px',
        padding: '10px', // Padding for list items 
              borderRadius: '5px', // Optional border radius
              backgroundColor:'whitesmoke'
       }}
    >
      <h2 style={{margin:'0'
      }}>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Published on:</strong> {book.publicationDate}</p>
      <button onClick={() => onBorrow(book)} style={{marginRight:"10px",padding:"10px"}}>Borrow</button>
      <button onClick={() => onReturn(book)} style={{marginRight:"10px",padding:"10px"}}>Return</button>
      <button onClick={onEdit}  style={{padding:"10px"}}>Edit</button>
     

    </div>
  );
};

export default BookDetail;
