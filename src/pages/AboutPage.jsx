import React from 'react';
import { Link } from 'react-router-dom';
import owlImage from '../assets/owl.png';

function AboutPage() {
  return (
    <div className="home-container">
      <header className="main-header">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             My Library
        </div>
        <nav className="nav-links">
          <Link to="/home">Мої книги</Link>
          <Link to="/add">Додати книгу</Link>
          <Link to="/about" style={{ color: '#3e3c61', fontWeight: 'bold' }}>Про нас</Link>
          <Link to="/">Вихід</Link>
        </nav>
      </header>

      <main className="library-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
        <img src={owlImage} alt="Owl" style={{ width: '150px', marginBottom: '20px' }} />
        <h1 style={{ color: '#3e3c61', fontSize: '48px', margin: '0 0 20px 0', fontWeight: 'bold' }}>My Library</h1>
        <p style={{ color: '#666', fontSize: '24px', maxWidth: '600px', lineHeight: '1.5' }}>
          Це студентський проєкт для<br/> відстеження прочитаних книг.
        </p>
      </main>
    </div>
  );
}

export default AboutPage;