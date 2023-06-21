import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../api/api';

function Categories({ value = 0, onChangeCategory }) {
  const [categories, setCategories] = useState([]);

  // Стили
  const nonActive = "font-medium text-lg flex items-center justify-center w-[150px] h-[40px] hover:font-bold rounded-lg duration-300 cursor-pointer bg-gray-700 text-white border-2 border-gray-700";
  const active = "font-bold easy-in duration-300  flex text-center justify-center items-center text-white rounded-lg border-main bg-main border-2 w-[150px] h-[40px]"

  useEffect(() => {
    axios.get(`${API_URL}/categories/`)
      .then((response) => {
        setCategories([{ id: 0, name: 'Все' }, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul className="flex-row gap-4 flex-wrap lg:flex-col lg:items-center justify-center flex text-[20px]">
        {categories.map((category, i) => (
          <li
            key={category.id}
            onClick={() => onChangeCategory(category.id)}
            className={value === category.id || (value === 0 && i === 0) ? active : nonActive}
          >
            <h1 className="category-name">{category.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;