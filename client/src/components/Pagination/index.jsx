import React from 'react'

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  const buttons = []
  let count = 43

  for (let i = 1; i < count; i++) {
    buttons.push(Math.round(i))
  }

  let nextPage = () => {
    if (totalPages === 42) return;
    handleClick((pages) => pages + 1);
  };

  let prevPage = () => {
    if (totalPages === 1) return;
    handleClick((pages) => pages - 1);
  };


  return (
    <div className='butPage'>
      <button onClick={prevPage}>prev</button>

      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => handleClick(button)}
        >{button}</button>
      ))}
      <div className='bottonBottom'>

        <button onClick={nextPage}>next</button>
      </div>
    </div>
  )
}

export default Pagination