import React from 'react'

const CountItem = () => {
  const isAvailable = stock > 0;
  const isLowStock = isAvailable && stock < 10;
  const stockClass = isAvailable ? "text-green-600" : "text-main";
  const stockText = isLowStock ? "Осталось мало" : isAvailable ? "В наличии" : "Нет в наличии";
  const stockTextClass = isLowStock ? "text-orange-600" : "";
  return (
    <div>
      <p className={`text-[15px] ${stockClass} ${stockTextClass}`}>{stockText}</p>
    </div>
  )
}
