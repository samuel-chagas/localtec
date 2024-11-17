import { useEffect, useState } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./boxproduto.css"; 

const BoxProduto = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  }, []);

  const handleBuyClick = (id) => {
    navigate(`/aluguel/${id}`); 
  };

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
          <button className="buyButton" onClick={() => handleBuyClick(product.id)}>Comprar</button>
        </div>
      ))}
    </div>
  );
};

export default BoxProduto;
