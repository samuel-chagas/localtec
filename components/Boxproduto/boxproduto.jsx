import  { useEffect, useState } from "react";
import axios from "axios";
import "./boxproduto.css"; 

const BoxProduto = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="productCard">
          <img
            src={product.image}
            alt={product.name}
            className="productImage"
          />
          <h3 className="productName">{product.name}</h3>
          <button className="buyButton">Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default BoxProduto;
