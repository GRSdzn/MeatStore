import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_MAIN } from './../api/api';
import axios from 'axios';

import { BiUserCircle } from 'react-icons/bi'
import { IconContext } from 'react-icons';

const MyPage = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user); // Получение свойства user

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_MAIN}/acc/users/detail/${user.id}/`, { // Использование свойства user.id
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated && user) { // Проверка наличия user
      fetchUserData();
    }
  }, [isAuthenticated, token, user]); // Включение user в зависимости useEffect

  const guestLinks = () => (
    <Fragment>
      <h1 className="text-gray-500">Войдите в свой аккаунт</h1>
      <Link to='/login'><button className="p-4 px-8 bg-main text-white rounded-lg text-center">Войти</button></Link>
    </Fragment>
  );

  const authLinks = () => {
    if (!userData) {
      return null;
    }
    const { first_name, last_name, phone_number } = userData;
    return (
      <>
        <IconContext.Provider value={{ size: "5em", color: "#707070", className: "color-main" }}>
          <div>
            <div className="flex">
              <BiUserCircle className="sm:hidden" />
              <h1 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-left">Профиль</h1>
            </div>
            <div className="py-8 gap-y-[40px] grid grid-flow-col grid-cols-2 grid-rows-2 content-between sm:grid-cols-1 sm:grid-flow-row">
              <div>
                <h3 className="text-secondary font-bold text-[20px] mb-4 bg-backgroundAll">Ваше имя:</h3>
                <div className="bg-gray-700 p-2 rounded-lg w-fit">
                  <h3 className="text-lg text-white font-light">{first_name}</h3>
                </div>
              </div>
              <div>
                <h3 className="text-secondary font-bold text-[20px] mb-4 bg-backgroundAll">Ваша фамилия:</h3>
                <div className="bg-gray-700 p-2 rounded-lg w-fit">
                  <h3 className="text-lg text-white font-light ">{last_name}</h3>
                </div>
              </div>
              <div>
                <h3 className="text-secondary font-bold text-[20px] mb-4 bg-backgroundAll">Ваш номер телефона:</h3>
                <div className="bg-gray-700 p-2 rounded-lg w-fit">
                  <h3 className="text-lg text-white font-light">+ {phone_number}</h3>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-secondary font-bold text-[40px] mb-12 bg-backgroundAll md:text-left">История заказов</h1>
              <div>
                <div className="flex items-center flex-wrap border-2 border-[#2E2E2E] p-4 justify-between sm:gap-[50px] sm:flex-col1">
                  <div className="flex h-full max-h-[50px] rounded-lg mr-8 items-center">
                    <div className="max-w-[50px] w-12 h-12 bg-cover ">
                      <img src="https://eda.ru/img/eda/620x-/s1.eda.ru/StaticContent/Photos/170306190614/210119150750/p_O.jpg" className="rounded-lg" />
                    </div>
                    <div className="flex flex-col ml-5 text-white">
                      {/* //Название товара */}
                      <h1 className="text-[18px] font-bold">Филе мясо птицы</h1>
                      {/* //Цена товара */}
                      <h1 className="font-bold text-gray-400">500 Р</h1>
                      {/* //Количество купленных товаров */}
                      <h2 className="text-gray-500">2</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col float-right">
              <button className="bg-transparent w-44 h-10 rounded-lg border-2 border-main text-main hover:bg-main hover:border-none hover:text-white duration-300 mt-8">Удалить профиль</button>
              <Link to='/'><button className="bg-transparent w-44 h-10 rounded-lg border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300 mt-5">Вернуться назад</button></Link>
            </div>
          </div>
        </IconContext.Provider>
      </>

    );
  };
  return (
    <>
      <Fragment>
        <section className="px-[10vh] py-40 min-h-[100vh] lg:px-14 ">
          {isAuthenticated ? authLinks() : guestLinks()}
          {/* ... остальной код ... */}
        </section>
      </Fragment>
    </>
  );
};

export default MyPage;
