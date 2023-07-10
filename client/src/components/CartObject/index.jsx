import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../addToCartButton';
import axios from 'axios';

function CartObject({ title, price, imageUrl, stock, id }) {
  const isAvailable = stock > 0;
  const isLowStock = isAvailable && stock < 10;
  const stockClass = isAvailable ? "text-green-600" : "text-main";
  const stockText = isLowStock ? "Осталось мало" : isAvailable ? "В наличии" : "Нет в наличии";
  const stockTextClass = isLowStock ? "text-orange-600" : "";
  const quantity = 1;
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/detail/${id}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div className="w-[300px] h-[420px] bg-[#e0e0e0] rounded-lg px-[15px] py-[15px] hover:shadow-gray-900 hover:shadow-lg hover:scale-[1.05] -z-0 duration-300 easy-out sm:w-[250px] sm:h-[400px] sm:hover:scale-100 ">
        <Link to={`/CartPage/${id}`}>
          <img src={imageUrl} alt="img" className="w-[270px] h-[200px] rounded-lg" />
          <p className="text-[16px] mt-[10px] whitespace-nowrap overflow-hidden text-ellipsis">{title}</p>
          <p className="text-[16px] mt-[12px] font-light text-[#707070]">Артикул: {id}</p>
          <p className="text-[24px] mt-[5px] font-bold text-[#292929] mb-2 sm:mb-0">{price} <span className="text-[#707070] text-[15px]"> ₽/1кг</span></p>
        </Link>
        <div>
          <p className={`text-[15px] ${stockClass} ${stockTextClass}`}>{stockText}</p>
          <div className="flex justify-end sm:flex-none sm:justify-start sm:mt-[5px]">
            <AddToCartButton product={product} quantity={quantity} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartObject;
