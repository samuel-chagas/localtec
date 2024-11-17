import { useEffect, useState } from "react"; 
import axios from "axios"; 
import "./boxproduto.css"; 

import "./boxproduto.css"; 

const BoxProduto = ({ product }) => {  
  console.log('Produto recebido no BoxProduto:', product);

  return (
    <div className="container">
      <div className="productCard">
        <img
          src={product.image}
          alt={product.name}
          className="productImage"
        />
        <h3 className="productName">{product.name}</h3>
        <p>{product.Descricao}</p> 
        <p>Preço: R${product.preco}</p> 
      </div>
    </div>
  );
};

export default BoxProduto;
