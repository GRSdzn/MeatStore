import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <div className="container px-[10vh] py-[8vh] min-h-[90vh] justify-around flex-wrap rounded-lg lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center text-white">
      <div>
        <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center">Вход</h2>
      </div>
      <p>Войдите в свой аккаунт</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='email'
            placeholder='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='password'
            placeholder='Пароль'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
            required
          />
        </div>
        <button className="btn btn-primary bg-main p-4 rounded-lg text-white hover:font-bold duration-300" type='submit'>Войти</button>
      </form>
      <p className="mt-3">
        Еще нет аккаунта? <Link to='/signup' className="text-gray-400">Зарегистрироваться</Link>
      </p>
      <p className="mt-3">
        Забыли пароль? <Link to='/reset-password' className="text-gray-400">Восстановить Пароль</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);