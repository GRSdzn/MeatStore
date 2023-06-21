import React from 'react';
import ArrowDown from '../assets/img/down_arrow.svg';

function Sort({ value, onChangeSort }) {
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: '', sortProperty: '' },
    { name: 'цене ↑', sortProperty: 'price' },
    { name: 'цене ↓', sortProperty: '-price' },
    { name: 'алфавиту ↑', sortProperty: '-title' },
    { name: 'алфавиту ↓', sortProperty: 'title' },
  ];

  const onClickListItem = (obj) => {
    onChangeSort(obj);
    setOpen(false);
  };

  const onResetSort = () => {
    if (value.sortProperty !== list[0].sortProperty) {
      onChangeSort(list[0]);
    }
  };

  return (
    <div className="flex flex-col text-[#292929] px-[6vh] mb-8 pt-8 flex-wrap text-[17px] lg:items-center " >
      <div className="flex flex-wrap">
        <b className="text-white">Сортировка по:  </b>
        <span className="text-main duration-300 hover:text-mainLight font-light flex ml-1 cursor-pointer border-main" onClick={() => setOpen(!open)}> {value.name} <img src={ArrowDown} alt='arrow' className="ml-2 cursor-pointer" /></span>
        <button className="text-gray-500 hover:text-gray-400 duration-300 ml-4" onClick={onResetSort}>Сбросить</button>
      </div>
      {open && (
        <div className="pt-4 pb-4 bg-[#fff] absolute z-10 my-8 shadow-[#272727] shadow-lg text-center rounded-lg h-[full] w-[150px] ml-[140px] text-[17px] lg:items-center lg:m-0 lg:my-9">
          <ul>
            {list.map((obj) => (
              <li
                key={obj.sortProperty}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'text-main font-bold' : 'cursor-pointer duration-100 ease-in hover:bg-[#eeeeeed8]'} >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
