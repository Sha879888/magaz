import React from 'react';

import { removeProduct, CProduct } from '../Utils/Functions';

let BasketProduct = (props) => {
  return (
    <div className="BasketProductContainer" style={props.divStyle}>
      <div className='Product'>
        <img src={props.src} width={140} height={140} alt={props.productName} />
        <h4>{props.productName}</h4>
        <span>{props.price} ₽ {props.id} </span>
        <button onClick={() => props.removeProduct(props.productName)}>X</button>
      </div>
    </div>
  );
}

export default BasketProduct;
