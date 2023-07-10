import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import CartObject from '../components/CartObject';
import Categories from '../components/Categories';
import Panel from '../components/Panel';
import Skeleton from '../components/CartObject/Skeleton';
import Sort from '../components/Sort';
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: '',
    sortProperty: '',
  });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; //Количество отображаемых на странице товаров

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const category = categoryId ? `category=${categoryId}&` : '';
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/?${category}ordering=${sortType.sortProperty}`
        );
        setItems(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setCurrentPage(0);
  }, [categoryId, sortType]);

  const meats = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map(obj => (
    <motion.div
      key={obj.id}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <CartObject {...obj} />
    </motion.div>
  ));

  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <div className="w-full h-[100vh] bg-no-repeat bg-cover bg-fixed bg-background ">
        <div className="flex flex-col px-[100px] lp:px-0 gap-4">
          <h1 className="text-[#fff] text-[60px] text-left font-bold mt-[35vh] sm:mt-[30vh] lg:text-center md:text-[40px] sm:text-[30px] sm:text-center">
            СВЕЖЕЕ МЯСО
            <br />ЗАЛОГ ЗДОРОВОГО
            <br />ЖЕЛУДКА
          </h1>
          <p className="text-gray-400 text-xl font-main lg:text-center">
            Адекватное качество по реальной цене
          </p>
        </div>
      </div>
      <section className="bg-backgroundAll py-[8vh] px-[10vh] sm:px-0">
        <div className="text-left ">
          <div>
            <h2 className="text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll md:text-center">Каталог</h2>
          </div>
        </div>
        <section className="rounded-lg bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none py-8">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <div className="flex justify-center">
            <div className="border-2 border-gray-700 e w-[40%] rounded-full my-8 text-center" />
          </div>
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
          <AnimatePresence>
            <div className="grid gap-x-[40px] gap-y-[65px] grid-cols-4 grid-rows-1 justify-items-center xl:grid-cols-2 xl:grid-rows-2 1xl:grid-cols-3 md:grid-cols-1">
              {isLoading ? skeletons : meats}
            </div>
          </AnimatePresence>
          <div className="mt-14">
            {pageCount > 0 && ( // Add a check for pageCount > 0
              <ReactPaginate
                previousLabel={'Назад'}
                nextLabel={'Вперед'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'flex gap-10 p-4 justify-center items-center text-white decoration-none'}
                activeClassName={'bg-main rounded-lg text-white p-2'}
                forcePage={currentPage >= 0 && currentPage < pageCount ? currentPage : 0}
              />
            )}
          </div>
        </section>
      </section>
      {/* items.map((obj) => <CartObject key={obj.id} {...obj} />) */}
      <Panel />
    </div>
  )
}

export default Home;