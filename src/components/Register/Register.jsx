import './Register.css'
import { useState } from "react";
import back from './back.png'
import vector from './Vector.png'

function Register({ onNavigate }) {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    rpassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.password.trim()) newErrors.password = "Введите пароль";
    if (!formData.rpassword.trim()) newErrors.rpassword = "Повторите пароль";
    if (formData.password !== formData.rpassword) newErrors.rpassword = "Пароли не совпадают";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onNavigate("home");
  };

  return (
    <div className='container'>
      <div className='bigC'>
        <img src={back} alt='' className='img1'></img>
      </div>
      <button className='back-btn' onClick={() => onNavigate("back")}>‹ Назад</button>
      <div className='containerRegister'>
        <div className='text1'>
          <h1>Создайте свой аккаунт</h1>
        </div>
        <form className='form'>
          <label className='label'>
            Email <br/>
            <input type="email" name="name" className='input' onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label className='label'>
            Пароль <br/>
            <div style={{position: "relative"}}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className='input'
                onChange={handleChange}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
                {showPassword ? (
                // Открытый глаз
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
                ) : (
                // Закрытый глаз (перечёркнутый)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
                )}
              </button>
            </div>
            {errors.password && <span className="error">{errors.password}</span>}
          </label>
          <label className='label'>
            Повторите пароль <br/>
            <div style={{position: "relative"}}>
            <input
            type={showConfirmPassword ? "text" : "password"}
            name="rpassword"
            className='input'
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-btn">
            {showConfirmPassword ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            )}
          </button>
          </div>
          </label>
        </form>
        <div>
          <button className='button' onClick={handleSubmit}>Создать</button>
          <a href="#" className='a'>Забыли пароль?</a>
        </div>
      </div>
    </div>
  );
}

export default Register;