import React, { useEffect, useState } from 'react'

import { Product } from './item/Product'

import style from './style.module.scss'
export const Cart = ({cartList, setCartList}) => {
  
  const [ newList, setNewList] = useState([])

  useEffect( () => {
    let newArr = [...new Set(cartList)]
    newArr.forEach(item => {
      item.price *= item.quantity
    })
    setNewList(newArr)
  },[cartList])

  const purchase = () => {
    setCartList([])
  }

  return (
    <div className={style.container}>
        <h1> Shopping Cart </h1>
        {newList.map((item,index) => (
          <div>
            <Product
              product= {item}
            />
          </div>
        ))}
        <button
          onClick={purchase}
        > Buy now!</button>
    </div>
  )
}
