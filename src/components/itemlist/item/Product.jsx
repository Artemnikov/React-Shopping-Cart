import React, {useState} from 'react'

import style from './style.module.scss'

export const Product = ({product, setCartList, cartList, index}) => {

  const [productQuantity, setProductQuantitu] = useState(product.quantity)

  const addtoCart = () => {
    let newprod = product
    newprod.quantity = productQuantity
    
    setCartList([...cartList, product])
  }


  return (
    <div className={style.container}> 
      <img src={product.image} alt="" />
      <div className={style.itemData}>
        <h1> {product.name} </h1>
        <p> {product.price} $</p>
        <p> {product.description} </p>
        <p> {product.quantity} </p>
        <div>
          <button
            onClick={() => addtoCart()}
          > Add to cart </button>

          <label htmlFor="quantity">qty.</label>
          <input type="number" name="quantity" id="quantity"  min={0} value={productQuantity}
            onChange={ (e) => setProductQuantitu(e.target.value)}
          />
        </div>
      </div>
  </div>
  )
}
