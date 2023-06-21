import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from './../../actions/auth';

const Activate = ({ verify }) => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const [verified, setVerified] = useState(false);

  const verify_account = () => {
    verify(uid, token);
    setVerified(true);
  };

  useEffect(() => {
    if (verified) {
      navigate('/');
    }
  }, [verified, navigate]);

  return (
    <div className="container px-[10vh] py-[8vh] min-h-[90vh] justify-around flex-wrap rounded-lg lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center text-white">
      <div>
        <div className="flex">
          <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center">Активация</h2>
        </div>
        <p className="text-secondary">Нажмите для активациии вашего аккаунта:</p>
        <button
          onClick={verify_account}
          type='type'
          className='mr-4 hover:underline md:mr-6 border-b-2 hover:text-main duration-200 mt-4'
        >
          Активировать
        </button>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);