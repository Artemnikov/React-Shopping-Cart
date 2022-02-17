import './App.css';

import { useState, useEffect } from 'react';
import { products } from './components/api/products';

import { ItemList } from './components/itemlist/ItemList';
import { Cart } from './components/cart/Cart';

function App() {
  const [ cartList, setCartList ] = useState([]);
  const [ productList, setProductList ] = useState([]);

  useEffect( () => {
    setProductList(products)

  }, [])
  

  return (
    <div className="App">
      <ItemList
        products = {productList}
        setCartList = {setCartList}
        cartList = {cartList}
      />
      <Cart
        cartList = {cartList}
        setCartList = {setCartList}
      />
    </div>
  );
}

export default App;
