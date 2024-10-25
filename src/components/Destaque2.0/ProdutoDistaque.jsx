import { useEffect, useState } from "react";
import styles from "./ProdutoDistaque.module.css";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Produtos em Destaque</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <button className={styles.rentButton}>Alugar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
