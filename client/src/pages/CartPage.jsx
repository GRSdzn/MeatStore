import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import TabsRender from './../components/TabsText/index';

import AddToCartButton from '../components/addToCartButton';

function CartPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/detail/${id}/?category`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) ? 0 : value);
  };

  const isAvailable = product.stock > 0;
  const isLowStock = isAvailable && product.stock < 10;
  const stockClass = isAvailable ? "text-green-600" : "text-main";
  const stockText = isLowStock ? "Осталось мало" : isAvailable ? "В наличии" : "Нет в наличии";
  const stockTextClass = isLowStock ? "text-orange-600" : "";

  return (
    <div>
      <div className="px-40 py-40 justify-around flex-wrap rounded-lg min-h-[90vh] lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center">
        <div className="rounded-lg bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none p-8 grid grid-flow-col content-around gap-12 lg:grid-flow-row grid-cols-2 xl:grid-cols-1 xl:grid-flow-row">
          <div className="w-full object-cover overflow-hidden">
            <img
              src={product.imageUrl}
              alt="img"
              className="rounded-lg w-full object-cover h-full overflow-hidden 2k:h-auto"
            />
          </div>

          <div>
            <div className="text-white">
              <h1 className="text-[35px] text-main font-bold">{product.title}</h1>
              <h2 className="text-lg text-gray-600 my-2">Описание </h2>
              <p className="font-normal">{product.description}</p>
            </div>
            <div className="text-gray-600 mt-5">
              <p className={`text-[15px] ${stockClass} ${stockTextClass}`}>{stockText}</p>

              <h2>Категория</h2>
              <ul className="flex">
                <li className="border-b-[1px] border-gray-600">{product.category}</li>
              </ul>
            </div>
            <div className="lg:float-right my-4">
              <div>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min={1}
                  max={40}
                  className="flex text-gray-800 text-center py-1 px-2 w-14 bg-[#ffffff86] border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-main sm:text-sm sm:my-3"
                />
                <AddToCartButton product={product} quantity={quantity} />
              </div>
              <Link to="/">
                <button className="bg-transparent w-44 h-10 rounded-lg border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300 mt-3">
                  Вернуться назад
                </button>
              </Link>
            </div>
          </div>
        </div>
        <TabsRender />
      </div>
    </div>
  );
}

export default CartPage;
