import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/Store';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import ShopCart from './pages/ShopCart';
import AboutUs from './pages/AboutUs';
import MyPage from './pages/MyPage';
import Login from './pages/Containers/Login';
import Signup from './pages/Containers/Signup';
import ResetPassword from './pages/Containers/ResetPassword';
import ResetPasswordConfirm from './pages/Containers/ResetPasswordConfirm';
import Activate from './pages/Containers/Activate';
import Layout from './hocs/Layout';
import License from './pages/License';
export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-backgroundAll">
      <Provider store={store}>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Layout />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/CartPage/:id' element={<CartPage />} />
              <Route path='/ShopCart' element={<ShopCart />} />
              <Route path='/AboutUs' element={<AboutUs />} />

              <Route path='/Login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/reset-password' element={<ResetPassword />} />
              <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
              <Route exact path='activate/:uid/:token' element={<Activate />} />
              <Route path='/MyPage' element={<MyPage />} />
              <Route path='/license' element={<License />} />


              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </SearchContext.Provider>
      </Provider>
    </div>
  );
}

export default App;