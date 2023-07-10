import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);

  const fetchCart = () => {
    const token = localStorage.getItem('access');

    if (!token) {
      console.log('User is not authenticated.');
      return;
    }

    axios
      .get("http://localhost:8000/api/cart/", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((response) => {
        setCartItems(response.data.items);
        setGrandTotal(response.data.grand_total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeFromCart = (id) => {
    const token = localStorage.getItem('access');

    if (!token) {
      console.log('User is not authenticated.');
      return;
    }

    axios
      .delete(`http://localhost:8000/api/cart/items/${id}/`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(() => {
        fetchCart(); // Fetch updated cart data
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearCart = () => {
    const token = localStorage.getItem('access');

    if (!token) {
      console.log('User is not authenticated.');
      return;
    }

    axios
      .delete("http://localhost:8000/api/cart/clear/", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(() => {
        setCartItems([]);
        setGrandTotal(0);
        fetchCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendCartToEmail = () => {
    const token = localStorage.getItem('access');

    if (!token) {
      console.log('User is not authenticated.');
      return;
    }

    axios
      .get('http://localhost:8000/api/cart/', {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((response) => {
        const cartId = response.data.id;

        if (!cartId) {
          console.log('Error retrieving cart: Cart ID not found.');
          return;
        }

        axios
          .post('http://localhost:8000/api/orders/', { cart_id: cartId }, {
            headers: {
              Authorization: `JWT ${token}`,
              'Content-Type': 'application/json',
            },
          })
          .then(() => {
            console.log('Cart sent to email successfully');
            alert('Данные успешно отправлены на почту.'); // Show success alert
            fetchCart(); // Fetch updated cart data
          })
          .catch((err) => {
            console.log('Error sending cart to email:', err);
          });
      })
      .catch((err) => {
        console.log('Error retrieving cart:', err);
      });
  };




  return (
    <div className="min-h-screen text-white px-[10vh] py-8 lg:px-14">
      <div className="text-left">
        <div>
          <h2 className="text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll md:text-center">Корзина</h2>
        </div>
      </div>
      <div>
        <p onClick={clearCart} className="cursor-pointer my-5 text-gray-700 hover:text-gray-500 duration-300 sm:text-center">Очистить корзину</p>
      </div>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center flex-wrap border-2 border-[#2E2E2E] p-4 justify-between sm:gap-8 sm:flex-col my-4">
            <div className="flex h-full sm:flex-col max-h-[50px] rounded-lg mr-8 items-center sm:content-center sm:m-0">
              <div className="max-w-[50px]  w-12 h-12 bg-cover">
                <img src={item.product.imageUrl} className="rounded-lg mr-2 sm:m-0" alt="" />
              </div>
              <div className="flex flex-col ml-5 sm:text-center sm:my-4 sm:ml-0">
                <h1 className="text-xl font-medium">{item.product.title}</h1>
                <h1 className="font-light text-gray-400">{item.product.price} руб.</h1>
              </div>
            </div>
            <div className="flex gap-4 sm:flex-col sm:items-center my-8">
              <h2 className="text-main">{item.quantity} шт.</h2>
              <p onClick={() => removeFromCart(item.id)} className="text-gray-600 font-light cursor-pointer hover:text-gray-500 duration-300">удалить</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[20px] text-main sm:text-center">Корзина пуста</p>
      )}
      <div className="flex justify-between mt-5 sm:flex-col sm:items-center items-center sm:gap-4">
        <div className="flex flex-col">
          <div className="flex sm:justify-center">
            <h1>Всего товаров:</h1>
            <h2 className="text-main ml-3 font-bold">{cartItems ? cartItems.length : 0}</h2>
          </div>
          <Link to="/">
            <button className="bg-transparent w-44 h-10 rounded-lg border-2 border-gray-700 text-gray-500 hover:bg-gray-700 hover:text-white duration-300 mt-3">Вернуться назад</button>
          </Link>
        </div>
        <div className="items-center flex flex-col">
          <h1 className="mb-2">Сумма заказа: {grandTotal}</h1>
          <button onClick={sendCartToEmail} className="w-44 h-10 rounded-lg bg-main border-none text-white font-bold duration-300 hover:bg-[#ff5d5d]">К оформлению</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
