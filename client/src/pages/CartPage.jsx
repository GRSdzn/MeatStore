import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import TabsRender from './../components/TabsText/index';

function CartPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://gurzhapi.space/api/products/detail/${id}/?category/`).then((response) => {
      setProduct(response.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="px-40 py-40 justify-around flex-wrap rounded-lg min-h-[90vh] lg:px-14 lg:justify-between sm:justify-center sm:px-2 sm:grid-flow-row justify-items-center">
        <div className="rounded-lg bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none p-8 grid grid-flow-col content-around gap-12 lg:grid-flow-row">
          <div className="max-w-[50vw] sm:min-w-[70vw] min-h-[40vh] bg-cover">
            <img src={product.imageUrl} alt="img" className="rounded-lg" />
          </div>
          <div>
            <div className="text-white">
              <h1 className="text-[35px] text-main font-bold">{product.title}</h1>
              <h2 className="text-lg text-gray-600 my-2">Описание </h2>
              <p className="font-normal">{product.description}</p>
            </div>
            <div className="text-gray-600 mt-5">
              <h2>Категория</h2>
              <ul className="flex">
                <li className="border-b-[1px] border-gray-600">{product.category}</li>
              </ul>
            </div>
            <div className="lg:float-right">
              <div>
                <button href="#" className="text-white hover:text-gray-800 font-bold bg-main hover:bg-main duration-300 rounded-lg text-[17px] w-44 h-10 mt-8 ">В корзину</button>
              </div>
              <Link to='/'><button className="bg-transparent w-44 h-10 rounded-lg border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300 mt-3">Вернуться назад</button></Link>
            </div>
          </div>
        </div>
        <TabsRender />
      </div>
    </div>
  )
}

export default CartPage;