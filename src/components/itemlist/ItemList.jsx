import React from 'react'

import style from './style.module.scss'

import {Product} from './item/Product'
export const ItemList = ( { products, setCartList, cartList } ) => {


  return (
    <div className={style.container}>
      <h1>Item list</h1>
      {products.map( (item, index ) => (
        <Product
          key={index}
          index = {index}
          cartList = {cartList}
          product = {item}
          setCartList = {setCartList}
        />
      ))}
    </div>
  )
}
