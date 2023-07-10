import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../actions/auth';
import { Link } from 'react-router-dom';

const ResetPassword = ({ reset_password }) => {
  const navigate = useNavigate();

  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  useEffect(() => {
    if (requestSent) {
      navigate('/');
    }
  }, [requestSent, navigate]);

  return (
    <div className="container px-[10vh] py-[8vh] min-h-[90vh] justify-around flex-wrap rounded-lg lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center text-white">
      <div>
        <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center sm:text-[45px]">Восстановление</h2>
        <p className="text-secondary md:text-center">Введите почту, на которую был создан аккаунт:</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 w-full  text-gray-700 my-3"
            type='email'
            placeholder='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <button className="btn btn-primary bg-main p-4 rounded-lg text-white hover:font-bold duration-300" type='submit'>Восстановить пароль</button>

      </form>
      <Link to='/'><button className="bg-transparent w-44 mt-8 h-10 rounded-lg border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300">Вернуться назад</button></Link>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
