import React from 'react';

const BookList = ({ books, onBookClick }) => {
  return (
    <div>
        <h2 style={{ textAlign:"center",color:"white"}}>Book List</h2>
    <div
      className="book-list"
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        textAlign: 'center', 
        borderRadius: '5px',/* Optional border radius */
    backgroundColor: 'white'// Center text
      }}
    >
       
        
      <ul style={{ listStyleType: 'none', padding: 0 ,margin:'0'}}>
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => onBookClick(book)}
            style={{
                textAlign:'center',
              cursor: 'pointer',
              margin: '10px 0', // Space between list items
              padding: '10px', // Padding for list items
              border: '1px solid black', // Optional border
              borderRadius: '5px', // Optional border radius
              transition: 'background-color 0.3s',
              color:'black'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default BookList;
