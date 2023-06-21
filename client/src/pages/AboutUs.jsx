import { IconContext } from "react-icons";
import { AiFillBook } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';

const AboutUs = () => {
  return (
    <IconContext.Provider value={{ size: "5em", color: "#707070", className: "color-main" }}>
      <section className="px-[10vh] py-40 min-h-[100vh] lg:px-14">
        <div>
          <div className="flex-wrap">
            <div className="flex">
              <AiFillBook />
              <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center">Контакты</h2>
            </div>
            <div className=" grid grid-flow-col justify-between gap-12 lg:grid-flow-row lg:grid-cols-1">
              <div className="max-w-xl h-96">
                <ul className="text-white">
                  <li className="py-2">
                    <h1 className="text-gray-600 text-xl font-bold">Адрес</h1>
                    <p>г. Москва, Автомобильный проезд дом 8, стр 6</p>
                  </li>
                  <li className="py-2">
                    <h1 className="text-gray-600 text-xl font-bold">Режим работы</h1>
                    <p>Ежедневно: с 9:00 до 20:00</p>
                  </li>
                  <li className="py-2">
                    <h1 className="text-gray-600 text-xl font-bold">Телефон</h1>
                    <p>8 999 777 00 00</p>
                  </li>
                  <li className="py-2">
                    <h1 className="text-gray-600 text-xl font-bold">Электронная почта</h1>
                    <p>meatmain@ya.ru</p>
                  </li>
                </ul>
              </div>
              <div className="max-w-3xl w-full">
                <iframe title="mite" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac6b5d7cef6058a414cf5d53929b7cbc8ee2901c9e0208de92a10ff53701fd187&amp;source=constructor" width="790" height="451" frameBorder="05" className="rounded-lg lg:w-[100%]"></iframe>
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <IoIosPeople />
              <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center">О нас</h2>
            </div>
            <div className="grid grid-flow-col justify-between gap-10 grid-cols-2 grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 sm:gap-0">
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Все самое лучшее и свежее - Вам</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere sit tempore quas voluptate! Est ab dignissimos ipsa esse consequatur accusamus laboriosam excepturi voluptas quidem? Dolore minima dolor dolores deleniti.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, mollitia pariatur iste officiis accusamus harum omnis atque eos nobis dicta quasi cupiditate sed illum eaque possimus ut accusantium quibusdam odit?</p>
              </div>
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Где мы берем хорошее мясо</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, mollitia pariatur iste officiis accusamus harum omnis atque eos nobis dicta quasi cupiditate sed illum eaque possimus ut accusantium quibusdam odit?</p>
              </div>
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Удовольствие от мяса, начиная с момента покупки</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, mollitia pariatur iste officiis accusamus harum omnis atque eos nobis dicta quasi cupiditate sed illum eaque possimus ut accusantium quibusdam odit?</p>
              </div>
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Только лучшее и отборное</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, mollitia pariatur iste officiis accusamus harum omnis atque eos nobis dicta quasi cupiditate sed illum eaque possimus ut accusantium quibusdam odit?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  )
}

export default AboutUs;