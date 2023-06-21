import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { IconContext } from 'react-icons';

function CartObject({ title, price, imageUrl, id, stock }) {
  const isAvailable = stock > 0;
  const isLowStock = isAvailable && stock < 10;
  const stockClass = isAvailable ? "text-green-600" : "text-main";
  const stockText = isLowStock ? "Осталось мало" : isAvailable ? "В наличии" : "Нет в наличии";
  const stockTextClass = isLowStock ? "text-orange-600" : "";

  return (
    <>
      <IconContext.Provider value={{ size: "1.5em", color: "white", className: "color-main" }}>
        <Link to={`/CartPage/${id}`}>
          <div className="w-[300px] h-[420px] bg-[#e0e0e0] rounded-lg px-[15px] py-[15px] hover:shadow-gray-900 hover:shadow-lg hover:scale-[1.05] -z-0 duration-300 easy-out sm:w-[250px] sm:h-[370px] sm:hover:scale-100 ">
            <img src={imageUrl} alt="img" className="w-[270px] h-[200px] rounded-lg" />
            <p className="text-[16px] mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis">{title}</p>
            <p className="text-[16px] mt-[12px] font-light text-[#707070]">Артикул: {id}</p>
            <p className="text-[24px] mt-[5px] font-bold text-[#292929] mb-2 sm:mb-0">{price} <span className="text-[#707070] text-[15px]"> ₽/1кг</span></p>
            {/* Добавляем класс stockClass, который выбирает цвет текста */}
            <div className="sm:flex sm:justify-between ">
              <p className={`text-16 ${stockClass} ${stockTextClass}`}>{stockText}</p>
              <div className="flex justify-end">
                <button className="text-white hover:text-gray-800 font-bold bg-main hover:bg-black duration-300 text-[17px] py-[10px] px-[30px] w-fit mt-[1vh] rounded-lg sm:hidden sm:mt-0">В корзину</button>
                <button className="bg-main rounded-full p-2 hidden sm:block">
                  <MdShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </IconContext.Provider>
    </>


  );
}

export default CartObject;
