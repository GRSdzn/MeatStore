import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
    re_password: '',
    agreementChecked: false
  });

  const { first_name, last_name, phone_number, email, password, re_password, agreementChecked } = formData;

  const onChange = e => {
    if (e.target.name === 'agreementChecked') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
    if (accountCreated) {
      navigate('/login');
    }
  }, [isAuthenticated, accountCreated, navigate]);

  const onSubmit = e => {
    e.preventDefault();
    if (password === re_password && agreementChecked) {
      signup(first_name, last_name, phone_number, email, password, re_password);
      setAccountCreated(true);
    }
  };

  return (
    <div className="container px-[10vh] py-[8vh] min-h-[90vh] justify-around flex-wrap rounded-lg lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center text-white">
      <div>
        <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-left sm:text-[50px]">Регистрация</h2>
      </div>
      <p>Создайте свой аккаунт:</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            required
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='email'
            placeholder='email*'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='text'
            placeholder='Имя*'
            name='first_name'
            value={first_name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='text'
            placeholder='Фамилия*'
            name='last_name'
            value={last_name}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='number'
            pattern="\d{10,}"
            placeholder='Номер телефона* Не менее 10 цифр'
            name='phone_number'
            value={phone_number}
            onChange={onChange}
            required
          />
        </div>
        <div className="mt-4">
          <p className="text-gray-500 font-light">Пароль должен одержать в себе как минимум 1 заглавный и 1 строчный латинский символ</p>
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='password'
            placeholder='Пароль*'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
            required
          />
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 sm:w-full w-[50%]  text-gray-700 my-3"
            type='password'
            placeholder='Повторите пароль*'
            name='re_password'
            value={re_password}
            onChange={onChange}
            minLength='6'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="agreement">
            <input
              className="mr-3 my-3"
              type="checkbox"
              id="agreement"
              name="agreementChecked"
              checked={agreementChecked}
              onChange={onChange}
              required
            />
            Я согласен на <Link to='/license'><span className="text-main">обработку персональных данных</span></Link>
          </label>
        </div>
        <button className="btn btn-primary bg-main p-4 rounded-lg text-white hover:font-bold duration-300" type='submit'>Зарегистрироваться</button>
      </form>
      <p className="mt-3">
        Уже есть аккаунт? <Link to='/login' className="text-gray-400">Войдите</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);