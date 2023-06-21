import React from "react";


const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap py-8">
        <div className="w-full lg:p-8">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sm:flex-col sm:gap-3"
            role="tablist"
          >
            <li className="-mb-px mr-2 flex-auto text-center">
              <button
                className={
                  "font-bold w-full h-[45px] rounded-lg block leading-normal " +
                  (openTab === 1
                    ? "w-full text-white bg-" + color
                    : "text-white bg-gray-700 font-html font-normal text-[17px] duration-300 w-full")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Как купить
              </button>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center">
              <button
                className={
                  "font-bold w-full h-[45px] rounded-lg block leading-normal " +
                  (openTab === 2
                    ? "w-full text-white bg-" + color
                    : "text-white bg-gray-700 font-html font-normal text-[17px] duration-300 w-full")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Условия возврата
              </button>
            </li>
            <li className="-mb-px mr-2 flex-auto text-center">
              <button
                className={
                  "font-bold w-full h-[45px] rounded-lg block leading-normal " +
                  (openTab === 3
                    ? "w-full text-white bg-" + color
                    : "text-white bg-gray-700 font-html font-normal text-[17px] duration-300 w-full")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Дополнительно
              </button>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words font-normal rounded-lg bg-[#2020208e] border-2 border-[#2E2E2E] lg:bg-transparent lg:border-none  w-full mb-6  text-white">
            <div className="px-4 py-5 flex-auto lg:p-0">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h1>
                    Наш магазин всегда стремится предоставить своим клиентам только высококачественные товары, однако, если вы обнаружили какие-либо проблемы или недостатки, мы готовы решить этот вопрос с нашей стороны.
                    Если товар не соответствует нормам качества, мы обязательно вернем вам деньги или обменяем товар на аналогичный - это наша гарантия. Если вы хотите вернуть товар, тогда его нужно вернуть по указанному в описании товара адресу.
                    При обнаружении недостатка в купленном товаре вы обязаны сообщить нам об этом в течение 7 дней после получения товара. Во время возврата вы должны предоставить документ, подтверждающий покупку и недостатки товара.
                    Пожалуйста, имейте в виду, что мы обеспечиваем наших клиентов не только качественной продукцией, но и ответственным отношением к своим обязательствам.
                    <br />
                    Мы готовы решить любые возникающие вопросы, связанные с качеством товаров, чтобы наши клиенты оставались всегда довольны нашим сервисом и обслуживанием.
                  </h1>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <h1>
                    Наш интернет-магазин мяса предлагает только качественную продукцию по выгодным ценам. Благодаря удобной системе заказов и быстрой доставке, вы можете купить свежее мясо без проблем и очередей. Также мы предоставляем информацию о происхождении мяса и его составе, что позволяет вам сделать правильный выбор продукта в соответствии с вашими потребностями и предпочтениями. Закажите качественное мясо без выходных прямо на дом или в офис у нас и наслаждайтесь вкусными блюдами в любое время!
                  </h1>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <h1>Оформление заказа в стандартном режиме выглядит следующим образом. Заполняете полностью форму по последовательным этапам:
                    адрес, способ доставки, оплаты, данные о себе. Советуем в комментарии к заказу написать информацию, которая поможет курьеру вас найти. Нажмите кнопку «Оформить заказ».
                    <br />
                    <br />
                    <div className="w-full border-2 border-[#353535] rounded-full" />
                    <br />
                    <span>Внимание!</span>
                    <br />
                    Оплата происходит за 1 кг. мяса
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="main" />
    </>
  );
}
