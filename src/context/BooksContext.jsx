import React, { createContext, useState, useEffect, useContext } from 'react';

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('my-books');
    return savedBooks ? JSON.parse(savedBooks) : [
      { id: 1, title: 'Sapiens', author: 'Yuval Noah Harari', status: 'reading' },
      { id: 2, title: 'Clean Code', author: 'Robert Martin', status: 'planned' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('my-books', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: Date.now() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);