import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoxProduto from '../Boxproduto/boxproduto2'; 
import styles from './MeusProdutos.module.css'; 
import { useParams } from 'react-router-dom'; 

const MeusProdutos = () => {
  const [reservas, setReservas] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchReservas = async () => {
      if (id) {
        try {
          // Buscar as reservas do usuário com base no `usuarioId`
          const usuarioProdutosResponse = await axios.get(`http://localhost:3001/usuariosProdutos?usuarioId=${id}`);
          const usuarioProdutosData = usuarioProdutosResponse.data;

          // Fazer chamadas para obter detalhes de cada produto reservado
          const produtosPromises = usuarioProdutosData.map(async (item) => {
            const produtoResponse = await axios.get(`http://localhost:3001/products/${item.produtoId}`);
            return {
              ...produtoResponse.data,
              dataEmprestimo: item.dataEmprestimo,
              dataEntrega: item.dataEntrega
            };
          });

          const produtosReservados = await Promise.all(produtosPromises);
          setReservas(produtosReservados);
        } catch (error) {
          console.error("Erro ao buscar os produtos reservados do usuário:", error);
        }
      } else {
        console.error("Nenhum userId fornecido");
      }
    };

    fetchReservas();
  }, [id]);

  return (
    <div>
      <h2 className={styles.h2}>Produtos Reservados</h2>
      <div className={styles.container}>
        {reservas.length === 0 ? (
          <p>Nenhum produto reservado</p>
        ) : (
          reservas.map((produto) => (
            <BoxProduto 
              key={produto.id} 
              product={produto} 
              dataEmprestimo={produto.dataEmprestimo} 
              dataEntrega={produto.dataEntrega} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MeusProdutos;
