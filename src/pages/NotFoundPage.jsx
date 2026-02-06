import React from 'react';
import { Link } from 'react-router-dom';
import owlImage from '../assets/owl.png';

function NotFoundPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh',
      textAlign: 'center', 
      color: '#3e3c61',
      fontFamily: 'Montserrat, sans-serif'
    }}>
      <img src={owlImage} alt="Owl" style={{ width: '150px', marginBottom: '20px' }} />
      <h1 style={{ fontSize: '80px', margin: '0', fontWeight: 'bold' }}>404</h1>
      <h2 style={{ fontSize: '24px', margin: '10px 0 20px' }}>Сторінку не знайдено</h2>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
        Вибачте, але такої сторінки не існує у нашій бібліотеці.
      </p>
      <Link to="/home" style={{ 
        padding: '12px 30px', 
        backgroundColor: '#3e3c61', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '25px',
        fontWeight: 'bold',
        fontSize: '16px'
      }}>
        На головну
      </Link>
    </div>
  );
}

export default NotFoundPage;