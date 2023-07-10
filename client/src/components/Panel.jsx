import { GiMeat } from 'react-icons/gi'
import { MdPayments } from 'react-icons/md'
import { IconContext } from "react-icons"
import { GiManualMeatGrinder } from "react-icons/gi"
export const Panel = () => {
  return (
    <>
      <IconContext.Provider value={{ size: "5em", color: "white", className: "color-main" }}>
        <section className=" px-[10vh] mt-24 sm:px-8">
          <div className="text-left ">
            <div>
              <h2 className=" text-secondary font-bold text-[60px] mt-20 mb-12 bg-backgroundAll md:text-[40px] md:text-center">Достоинства</h2>
            </div>
          </div>
          <div className=" rounded-lg border-2 border-[#2E2E2E] flex bg-[#2020208e] p-14 lg:p-0 lg:bg-transparent lg:border-none justify-between lg:flex-col lg:items-center flex-wrap  mb-[25vh]">
            <div className=" lg:mb-11 xl:mb-11 flex flex-col w-[400px] h-[450px] lg:w-[250px] items-center">
              <div className="bg-main w-[180px] h-[180px] rounded-full flex items-center justify-center">
                <GiMeat />
              </div>
              <div className="p-3 break-words text-center flex items-center flex-col">
                <h1 className="text-[#fff] text-[24px] font-bold lg:text-[14px]">Настоящий рай для ценителей мяса!</h1>
                <div className="border-2 border-gray-700 e w-40 rounded-full my-4" />
                <p className="text-[#fff] font-light text-[15px]">В нашем интернет-магазине мяса вы найдете уникальный ассортимент качественного мяса для самых изысканных блюд.</p>
              </div>
            </div>
            <div className=" lg:mb-11 xl:mb-11 flex flex-col w-[400px] h-[450px] lg:w-[250px] items-center">
              <div className="bg-main w-[180px] h-[180px] rounded-full flex items-center justify-center">
                <MdPayments />
              </div>
              <div className="p-3 break-words text-center flex items-center flex-col">
                <h1 className="text-[#fff] text-[24px] font-bold lg:text-[14px]">Многолетний<br />опыт</h1>
                <div className="border-2 border-gray-700 e w-40 rounded-full my-4" />
                <p className="text-[#fff] font-light text-[15px]">Вот уже 7 лет на рынке продажи мясных изделий</p>
              </div>
            </div>
            <div className=" lg:mb-11 xl:mb-11 flex flex-col w-[400px] h-[450px] lg:w-[250px] items-center">
              <div className="bg-main w-[180px] h-[180px] rounded-full flex items-center justify-center">
                <GiManualMeatGrinder />
              </div>
              <div className="p-3 break-words text-center flex items-center flex-col">
                <h1 className="text-[#fff] text-[24px] font-bold lg:text-[14px]">Качественное мясо без очередей!</h1>
                <div className="border-2 border-gray-700 e w-40 rounded-full my-4" />
                <p className="text-[#fff] font-light text-[15px]">Мы всегда бережно отбираем только лучшие экземпляры продукции для наших клиентов.</p>
              </div>
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </>
  )
}

export default Panel;