import React, { createContext, useState, useEffect, useContext } from 'react';

const BooksContext = createContext();

const API_URL = 'https://69899563c04d974bc69fb4e1.mockapi.io/books';

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err));
  }, []);

  const addBook = (newBook) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(savedBook => setBooks(prev => [...prev, savedBook]));
  };

  const removeBook = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => setBooks(prev => prev.filter(book => book.id !== id)));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);