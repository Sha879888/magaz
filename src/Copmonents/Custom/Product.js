import React from 'react';

import { addProduct, CProduct } from '../Utils/Functions';

let Product = (props) => {
    return (
      <div className="ProductContainer" style={props.divStyle}>
          <div className='Product'>
            <img src={props.src} width={140} height={140}/>
            <h4>{props.productName}</h4>
            <span>{props.price} ₽ </span>
            <button onClick={() => 
            
            {
              addProduct(localStorage.getItem("currentUser"), new CProduct(props.productName, props.src, props.price))
              
              console.log(JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))));
            }

            }>В корзину</button>
          </div>
      </div>
    );
  }
  
  export default Product;