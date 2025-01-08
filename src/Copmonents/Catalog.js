import React from 'react';

import Product from './Custom/Product';

let Catalog = (props) => {
    return (
      <div className="CatalogContainer" style={props.divStyle}>
        <div className='Products'>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          <Product productName="Samsung G123" src='https://i.imgur.com/syLvFZx.png' price="44 900"/>
          
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>
          <Product productName="Canon EOS 1300D" src='https://i.imgur.com/U2T4naj.png' price="30 970"/>

          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
          <Product productName="Audient ID4" src='https://i.imgur.com/Fjgomz0.png' price="18 190"/>
        </div>
      </div>
    );
  }
  
  export default Catalog;