import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBooks } from '../context/BooksContext';
import owlImage from '../assets/owl.png';

function AddBookPage() {
  const { addBook } = useBooks();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('reading');
  const [imgUrl, setImgUrl] = useState('');

  const handleSave = () => {
    if (!title || !author) return;
    addBook({ title, author, status, imgUrl });
    navigate('/home');
  };

  return (
    <div className="home-container">
      <header className="main-header">
        <div className="logo">My Library</div>
        <nav className="nav-links">
          <Link to="/home">Мої книги</Link>
          <Link to="/add" style={{ color: '#3e3c61', fontWeight: 'bold' }}>Додати книгу</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/">Вихід</Link>
        </nav>
      </header>

      <div style={{ backgroundColor: '#3e3c61', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
        
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ color: '#3e3c61', marginBottom: '30px', fontWeight: 'bold' }}>Нова книга</h1>
          
          <form className="login-form">
            <div className="input-group">
              <label>Назва книги</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Назва книги" />
            </div>
            
            <div className="input-group">
              <label>Автор</label>
              <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Автор" />
            </div>

            <div className="input-group">
              <label>URL картинки</label>
              <input type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)} placeholder="URL картинки" />
            </div>

            <div className="input-group">
              <label>Статус</label>
              <select 
                value={status} 
                onChange={e => setStatus(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  border: 'none',
                  backgroundColor: '#dcdceb',
                  borderRadius: '10px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  color: '#3e3c61',
                  cursor: 'pointer'
                }}
              >
                <option value="reading">Читаю</option>
                <option value="finished">Прочитано</option>
                <option value="planned">Планую</option>
              </select>
            </div>

            <button type="button" onClick={handleSave} className="login-btn" style={{ maxWidth: '200px', marginTop: '20px' }}>Зберегти</button>
          </form>
        </div>

        <img src={owlImage} alt="Owl" style={{ width: '100px', marginTop: '30px' }} />
        
      </div>
    </div>
  );
}

export default AddBookPage;