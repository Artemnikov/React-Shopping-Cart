import React from 'react'

import style from './style.module.scss'

export const Product = ({ product }) => {

  return (
    <div className={style.container}>
        <img src={product.image} alt="" />
        <div className={style.description}>
          <h1> {product.name} </h1>
          <p> Quantity:  {product.quantity} </p>
          <p> price: {product.price} </p>
        </div>
    </div>
  )
}
