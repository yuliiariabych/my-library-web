import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Імпортуємо хук для навігації
import owlImage from "../assets/owl.png";

function LoginPage() {
  const navigate = useNavigate(); // 2. Створюємо функцію навігації

  const handleLogin = (e) => {
    e.preventDefault(); // Зупиняємо перезавантаження сторінки
    // Тут у майбутньому буде перевірка пароля
    navigate("/home"); // 3. Примусово перекидаємо на Головну
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={owlImage} alt="Owl Logo" className="owl-logo" />
        <h1>Вхід</h1>
        
        {/* Додали обробник події onSubmit */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="example@mail.com" />
          </div>
          
          <div className="input-group">
            <label>Пароль</label>
            <input type="password" placeholder="•••••••" />
          </div>
          
          <button type="submit" className="login-btn">Увійти</button>
          
          <div className="links">
            {/* Поки що просто посилання-заглушки */}
            <a href="#">Зареєструватися</a>
            <a href="#">Забули пароль?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;