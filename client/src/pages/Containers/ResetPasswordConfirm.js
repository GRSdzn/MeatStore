import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../actions/auth';

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;
  const navigate = useNavigate();
  const { uid, token } = useParams();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  useEffect(() => {
    if (requestSent) {
      navigate('/');
    }
  }, [requestSent, navigate]);

  return (
    <div className="container px-[10vh] py-[8vh] min-h-[90vh] justify-around flex-wrap rounded-lg lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center text-white">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 w-[40%]  text-gray-700 my-3"
            type='password'
            placeholder='New password'
            name='new_password'
            value={new_password}
            onChange={onChange}
            minLength='6'
            required
          />
        </div>
        <div className="form-group">
          <input
            className="rounded-lg px-2 py-1 w-[40%]  text-gray-700 my-3"
            type='password'
            placeholder='Confirm New Password'
            name='re_new_password'
            value={re_new_password}
            onChange={onChange}
            minLength='6'
            required
          />
        </div>
        <button className="btn btn-primary bg-main p-4 rounded-lg text-white hover:font-bold duration-300" type='submit'>Reset Password</button>
      </form>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);