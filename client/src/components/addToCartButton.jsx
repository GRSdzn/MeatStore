import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setCartItems } from '../slices/cartSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Popup from './Popup';

function AddToCartButton({ product, quantity }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const addToCart = () => {
    const productID = product.id;
    const token = localStorage.getItem('access');

    if (!token) {
      setPopupMessage('Пользователь неавторизован');
      setShowPopup(true);
      return;
    }

    if (product.stock === 0) {
      setPopupMessage('Данного товара нет в наличии');
      setShowPopup(true);
      return;
    }

    if (quantity > product.stock) {
      setPopupMessage('Selected quantity exceeds available stock.');
      setShowPopup(true);
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    };

    const requestData = {
      product_id: productID,
      quantity: quantity,
    };

    axios
      .post('http://localhost:8000/api/cart/items/', requestData, { headers })
      .then((response) => {
        dispatch(setCartItems(response.data.total_quantity));
        setPopupMessage('Товар добавлен в корзину!');
        setShowPopup(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LoginBuyBtn = () => (
    <div className="flex justify-end sm:flex-none sm:justify-start sm:mt-[5px]">
      <Link
        to="/login"
        className="text-white hover:text-gray-800 font-bold bg-main duration-300 text-[17px] py-[10px] px-[30px] w-fit mt-[1vh] rounded-lg sm:mt-0 sm:px-[20px] sm:py-[5px] sm:text-[17px] hover:bg-[#ff5d5d]"
      >
        Войти
      </Link>
    </div>
  );

  const ButtonBuy = () => (
    <button
      onClick={addToCart}
      className="text-white hover:text-gray-800 font-bold bg-main duration-300 text-[17px] py-[10px] px-[30px] w-fit mt-[1vh] rounded-lg sm:mt-0 sm:px-[20px] sm:py-[5px] sm:text-[17px] hover:bg-[#ff5d5d]"
    >
      В корзину
    </button>
  );

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Fragment>
      {isAuthenticated ? ButtonBuy() : LoginBuyBtn()}
      <Popup isOpen={showPopup} onClose={handleClosePopup} message={popupMessage} />
    </Fragment>
  );
}

export default AddToCartButton;
