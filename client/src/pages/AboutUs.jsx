import { IconContext } from "react-icons";
import { AiFillBook } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';

const AboutUs = () => {
  return (
    <IconContext.Provider value={{ size: "5em", color: "#707070", className: "color-main" }}>
      <section className="px-[10vh] py-40 min-h-[100vh] lg:px-10">
        <div>
          <div className="flex-wrap">
            <div className="flex">
              <AiFillBook className="sm:hidden" />
              <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center">Контакты</h2>
            </div>
            <div className=" grid grid-flow-col justify-between gap-12 lg:grid-flow-row lg:grid-cols-1">
              <div className="max-w-xl h-96">
                <ul className="text-white">
                  <li className="py-2">
                    <h1 className="text-gray-600 text-xl font-bold">Адрес</h1>
                    <p>Вологодская область, Череповец, улица М. Горького, 30</p>
                  </li>
                  <li className="py-2">
                    <h1 className="text-gray-600 text-xl font-bold">Режим работы</h1>
                    <p>Ежедневно: с 9:00 до 20:00</p>
                  </li>
                  <li className="py-2">
                    <h1 className="text-gray-600 text-xl font-bold">Телефон</h1>
                    <p>+ 7 953 515-36-87</p>
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
              <IoIosPeople className="sm:hidden" />
              <h2 className="text-secondary font-bold text-[60px] mb-12 bg-backgroundAll md:text-center">О нас</h2>
            </div>
            <div className="grid grid-flow-col justify-between gap-10 grid-cols-2 grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 sm:gap-0">
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Все самое лучшее и свежее - Вам</h2>
                <p>
                  Мясной магазин - это место, где вы найдете самое лучшее и свежее мясо. Наша компания специализируется на продаже высококачественного мяса и мясных изделий. У нас вы найдете широкий ассортимент продукции: говядину, баранину, птицу, дичь и многое другое.
                </p>
              </div>
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Максимальна доступность</h2>
                <p>
                  Мы ориентированы на долгосрочное сотрудничество. Поэтому мы всегда стремимся сделать нашу продукцию доступной для всех своих клиентов. У нас вы найдете не только самые свежие и качественные продукты, но и приятные цены.
                </p>
              </div>
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Удовольствие от мяса, начиная с момента покупки</h2>
                <p>
                  За время своей работы мы накопили большой опыт в мясной индустрии и научились приготавливать лучшие деликатесы. Посетите наш магазин и убедитесь сами в качестве наших продуктов и сервиса. Мы всегда стремимся предложить нашим клиентам только самое лучшее.
                </p>
              </div>
              <div className="text-gray-400">
                <h2 className="text-[25px] py-2">Только лучшее и отборное</h2>
                <p>
                  Мы гордимся тем, что все наши продукты 100% натуральные и не содержат каких-либо добавок и консервантов. Мы работаем только с проверенными поставщиками, чтобы гарантировать качество нашей продукции.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  )
}

export default AboutUs;