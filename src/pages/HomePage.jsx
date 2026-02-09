import React from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from '../context/BooksContext';
import owlImage from '../assets/owl.png';

function HomePage() {
  const { books, removeBook } = useBooks();

  const getStatusColor = (status) => {
    switch (status) {
      case 'finished': case 'Прочитано': return '#6ebea6';
      case 'reading': case 'Читаю': return '#b68cb6';
      case 'planned': case 'Планую': return '#7d93b0';
      default: return '#ccc';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'reading': return 'Читаю';
      case 'finished': return 'Прочитано';
      case 'planned': return 'Планую';
      default: return status;
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
            <div key={book.id} className="book-card" style={{ position: 'relative' }}>
              
              <button 
                onClick={() => removeBook(book.id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  color: '#e74c3c',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  lineHeight: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                ×
              </button>

              <div className="book-cover" style={{ backgroundColor: book.color || '#e8d576' }}>
                 {book.imgUrl ? (
                    <img 
                      src={book.imgUrl} 
                      alt={book.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const span = document.createElement('span');
                        span.className = 'cover-text';
                        span.innerText = book.title;
                        e.target.parentNode.appendChild(span);
                      }}
                    />
                 ) : (
                    <span className="cover-text">{book.title}</span>
                 )}
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <div className="status-badge" style={{ backgroundColor: getStatusColor(book.status) }}>
                  {getStatusText(book.status)}
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