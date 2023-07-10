import Logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-[#2E2E2E] py-[50px] pl-[6vh] pr-[6vh]">
        <div className="sm:flex-col sm:items-center sm:justify-between ">
          <button className="flex items-center mb-4 sm:mb-0 sm:flex-col">
            <img className="mr-3 h-8" src={Logo} alt='img' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Мясная лавка</span>
          </button>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-400 sm:mb-0 sm:flex-col sm:text-right sm:items-start gap-2">
            <li>
              <Link to='/' className="mr-4 hover:underline md:mr-6 ">Главная</Link>
            </li>
            <li>
              <Link to="/aboutus" className="mr-4 hover:underline md:mr-6 ">О нас</Link>
            </li>
            <li>
              <Link to="/Login" className="mr-4 hover:underline md:mr-6 ">Войти</Link>
            </li>
            <li>
              <Link to="/signup" className="mr-4 hover:underline md:mr-6 ">Зарегистрироваться</Link>
            </li>
            <li>
              <Link to="/mypage" className="mr-4 hover:underline md:mr-6 ">Профиль</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8 border-gray-500" />
        <span className="block text-sm text-gray-500">© 2022 <button className="hover:underline">MeatMain™</button>. Все права защищены.
        </span>
      </footer>

    </div>
  )
}

export default Footer