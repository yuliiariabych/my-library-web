import React from 'react';
import { Link } from 'react-router-dom'; // НЕ ЗАБУДЬ ЦЕЙ ІМПОРТ
import owlImage from '../assets/owl.png';

function HomePage() {
  const books = [
    { id: 1, title: 'If Not Now When', author: 'Author Name', status: 'Прочитано', color: '#e8d576' },
    { id: 2, title: 'Abukoo Sudoku', author: 'Author Name', status: 'Читаю', color: '#7bc77b' },
    { id: 3, title: 'Minimal Chair', author: 'Author Name', status: 'Планую', color: '#a6cbe0' },
    { id: 4, title: 'If Not Now When', author: 'Author Name', status: 'Читаю', color: '#e8d576' },
    { id: 5, title: 'Abukoo Sudoku', author: 'Author Name', status: 'Прочитано', color: '#7bc77b' },
    { id: 6, title: 'Minimal Chair', author: 'Author Name', status: 'Читаю', color: '#a6cbe0' },
    { id: 7, title: 'If Not Now When', author: 'Author Name', status: 'Планую', color: '#e8d576' },
    { id: 8, title: 'Minimal Chair', author: 'Author Name', status: 'Читаю', color: '#a6cbe0' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Прочитано': return '#6ebea6';
      case 'Читаю': return '#b68cb6';
      case 'Планую': return '#7d93b0';
      default: return '#ccc';
    }
  };

  return (
    <div className="home-container">
      <header className="main-header">
        <div className="logo">My Library</div>
        <nav className="nav-links">
          <Link to="/home" style={{ color: '#3e3c61', fontWeight: 'bold' }}>Мої книги</Link>
          <Link to="/add">Додати книгу</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/">Вихід</Link>
        </nav>
      </header>

      <main className="library-content">
        <div className="library-title">
          <h1>Моя Бібліотека</h1>
          <img src={owlImage} alt="Owl" className="title-icon" />
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover" style={{ backgroundColor: book.color }}>
                <span className="cover-text">{book.title}</span>
              </div>
              <div className="book-info">
                <h3>Назва книги</h3>
                <p>Автор</p>
                <div className="status-badge" style={{ backgroundColor: getStatusColor(book.status) }}>
                  {book.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;