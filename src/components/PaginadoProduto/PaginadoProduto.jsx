import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./PaginadoProduto.module.css"; 

const AluguelProduto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [days, setDays] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("Buscando produto com ID:", id);
      try {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        console.log("Produto carregado:", response.data);
        setProduct(response.data);
        setTotalPrice(response.data.preco);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error.response.data);
        setError("Não foi possível carregar os detalhes do produto.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Carregando...</div>;
  }

  const handleAlugar = () => {
    alert(`Você alugou ${product.name} por ${days} dias. Total: R$ ${totalPrice}`);
  };

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.description}>{product.Descricao}</p>
      <p className={styles.category}>Categoria: {product.categoria}</p>
      <p className={styles.price}>Preço por dia: R$ {product.preco}</p>
      
      <label htmlFor="days" className={styles.label}>Quantidade de dias:</label>
      <input
        type="number"
        id="days"
        value={days}
        onChange={(e) => {
          const selectedDays = Math.max(1, e.target.value);
          setDays(selectedDays);
          setTotalPrice(product ? (selectedDays * product.preco).toFixed(2) : 0);
        }}
        min="1"
        className={styles.daysInput}
      />
      
      <h3 className={styles.totalPrice}>Preço total: R$ {totalPrice}</h3>

      <button className={styles.alugarButton} onClick={handleAlugar}>
        Alugar
      </button>
    </div>
  );
};

export default AluguelProduto;
