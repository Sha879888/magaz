import React, { useState } from 'react';

import BasketProduct from './Custom/BasketProduct';

function getUserData(username) {
  return JSON.parse(localStorage.getItem(username));
}


let Basket = (props) => {
  const currentUser = localStorage.getItem("currentUser");
  
  const getUserProducts = () => {
    const products = JSON.parse(localStorage.getItem(currentUser));
    return Array.isArray(products.products) ? products.products : [];
  }

  const [products, setProducts] = useState(getUserProducts());

  const removeProduct = (productName) => {
    const updatedProducts = [...products]; 
    const productIndex = updatedProducts
      .slice()
      .reverse() 
      .findIndex(product => product.productName === productName); 
    
    if (productIndex !== -1) { 
      const actualIndex = updatedProducts.length - 1 - productIndex; 
      updatedProducts.splice(actualIndex, 1); 
      const userData = JSON.parse(localStorage.getItem(currentUser));
  
      userData.products = updatedProducts;
  
      setProducts(updatedProducts);
    
      localStorage.setItem(currentUser, JSON.stringify(userData));
    
      console.log(userData); 
    }
  };

  let getCount = () => {
    let fcount = 0;
    products.map((product) => {
      fcount += parseInt(product.price.replace(/\s+/g, ''));
    });

    return fcount;
  }

  return (
    <div className="BasketContainer" style={props.divStyle}>
        <div className='Products'>
          {products.map((product) => (
            <BasketProduct productName={product.productName} src={product.src} price={product.price} removeProduct={removeProduct}/>
          ))}
      </div>
      <h2>Итоговая цена: {getCount()} ₽</h2>
      <button className='pay'>Оформить заказ</button>
    </div>
  );
  }
  
  export default Basket;