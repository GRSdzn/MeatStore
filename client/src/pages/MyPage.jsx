import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BiUserCircle } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const MyPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('access');

        if (!token) {
          console.log('User is not authenticated.');
          return;
        }

        const response = await axios.get(`http://localhost:8000/auth/users/me/`, {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated && user) {
      fetchUserData();
    }
  }, [isAuthenticated, user]);

  const guestLinks = () => (
    <Fragment>
      <h1 className="text-gray-500">Войдите в свой аккаунт</h1>
      <Link to="/login">
        <button className="p-4 px-8 bg-main text-white rounded-lg text-center">Войти</button>
      </Link>
    </Fragment>
  );

  const authLinks = () => {
    if (!userData) {
      return null;
    }
    const { first_name, last_name, phone_number } = userData;
    return (
      <>
        <IconContext.Provider value={{ size: '5em', color: '#707070', className: 'color-main' }}>
          <div>
            <div className="flex items-center">
              <BiUserCircle className="sm:hidden" />
              <h1 className="text-secondary font-bold text-6xl md:text-left lp:text-5xl">Профиль</h1>
            </div>
            <div className="py-8 gap-y-8 grid grid-cols-1 sm:grid-cols-1">
              <div>
                <h3 className="text-secondary font-bold text-2xl mb-4 sm:text-xl">Ваше имя:</h3>
                <div className="bg-gray-700 p-2 rounded-lg w-fit">
                  <h3 className="text-lg text-white font-light">{first_name}</h3>
                </div>
              </div>
              <div>
                <h3 className="text-secondary font-bold text-2xl mb-4 sm:text-xl">Ваша фамилия:</h3>
                <div className="bg-gray-700 p-2 rounded-lg w-fit">
                  <h3 className="text-lg text-white font-light">{last_name}</h3>
                </div>
              </div>
              <div>
                <h3 className="text-secondary font-bold text-2xl mb-4 sm:text-xl">Ваш номер телефона:</h3>
                <div className="bg-gray-700 p-2 rounded-lg w-fit">
                  <h3 className="text-lg text-white font-light">{phone_number}</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col float-right sm:float-left">
              <Link to="/">
                <button className="bg-transparent w-44 h-10 rounded-lg border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300 mt-5">
                  Вернуться назад
                </button>
              </Link>
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
  };

  return (
    <Fragment>
      <section className="px-40 py-40 min-h-screen lg:px-14 bg-gray-200 sm:px-2">
        {isAuthenticated ? authLinks() : guestLinks()}
        {/* ... остальной код ... */}
      </section>
    </Fragment>
  );
};

export default MyPage;
