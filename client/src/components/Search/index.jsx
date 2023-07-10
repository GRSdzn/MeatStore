import React, { useState, useEffect } from 'react';
import { SearchContext } from './../../App';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Search = () => {
  // получение значения поиска и функции установки значения из контекста
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  // хук состояния для хранения продуктов
  const [products, setProducts] = useState([]);

  // хук эффекта, запрашивающий продукты с сервера при монтировании компонента
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products/')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // функция обработчика клика по ссылке на продукт, устанавливающая значение поиска в пустую строку
  const handleLinkClick = () => {
    setSearchValue('');
  };

  // фильтрация продуктов по значению поиска
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    // контейнер поисковой строки
    <div className="flex relative">
      {/* форма поиска */}
      <form className="relative ">
        {/* иконка поиска */}
        <svg
          width="20"
          height="20"
          fill="#525252"
          className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        {/* поле ввода поиска */}
        <input
          type="text"
          className="flex w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 text-gray-700 bg-[#ffffff86] border-none rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Поиск товаров"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <AnimatePresence>
        {searchValue.length > 0 && (
          <motion.div
            className="absolute z-50 bg-[#2e2e2e] rounded-lg  mt-10 w-full max-h-[70vh] overflow-auto shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link to={`/CartPage/${product.id}`} onClick={handleLinkClick}>
                  <p className="text-white hover:text-main font-medium font-main duration-300">
                    {product.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
