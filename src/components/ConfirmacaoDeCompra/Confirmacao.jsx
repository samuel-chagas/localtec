import React from 'react';
import './Confirmacao.css/'


  const Confirmacao = () => {
  return (
    <><div className="Finalizar compra">
      <h2>Informações Pessoais</h2>
      <div className="campo">
        <label htmlFor="nome">Nome Completo *</label>
        <input type="text" id="nome" placeholder="Insira seu nome" />
      </div>
      <div className="campo">
        <label htmlFor="cpf">CPF *</label>
        <input type="text" id="cpf" placeholder="Insira seu CPF" />
      </div>
      <div className="campo">
        <label htmlFor="email">E-mail *</label>
        <input type="email" id="email" placeholder="Insira seu email" />
      </div>
      <div className="campo">
        <label htmlFor="celular">Celular *</label>
        <input type="text" id="celular" placeholder="Insira seu celular" />
      </div>
    </div><div className="Finalizar compra">
        <h2>Informação de Entrga </h2>
        <div className="campo">
          <label htmlFor="endereço">Endereço *</label>
          <input type="text" id="endereço" placeholder="Insira seu endereço" />
        </div>
        <div className="bairro">
          <label htmlFor="bairro">Bairro *</label>
          <input type="text" id="bairro" placeholder="Insira seu bairro" />
        </div>
        <div className='cidade'>
          <label htmlFor="cidade">Cidade *</label>
          <input type="text" id="cidade" placeholder="Insira sua cidade" />
        </div>
        <div className='cep'>
          <label htmlFor="cep">CEP *</label>
          <input type="text" id="cep" placeholder="Insira seu CEP" />
        </div>
        <div className='complemento'>
          <label htmlFor="complemento">Complemento</label>
          <input type="text" id="complemento" placeholder="Insira seu complemento" />
        </div>
      </div><div className="Finalizar compra">
        <h2>Informação de Entrga </h2>
        <div className="campo">
          <label htmlFor="endereço">Endereço *</label>
          <input type="text" id="endereço" placeholder="Insira seu endereço" />
        </div>
        <div className="bairro">
          <label htmlFor="bairro">Bairro *</label>
          <input type="text" id="bairro" placeholder="Insira seu bairro" />
        </div>
        <div className='cidade'>
          <label htmlFor="cidade">Cidade *</label>
          <input type="text" id="cidade" placeholder="Insira sua cidade" />
        </div>
        <div className='cep'>
          <label htmlFor="cep">CEP *</label>
          <input type="text" id="cep" placeholder="Insira seu CEP" />
        </div>
        <div className='complemento'>
          <label htmlFor="complemento">Complemento</label>
          <input type="text" id="complemento" placeholder="Insira seu complemento" />
        </div>
      </div><div className="Finalizar compra">
        <h2>Infomação do Pagamento</h2>
        <div className="forma de pagamento">
          <label htmlFor="forma de pagamento">Forma de Pagamento *</label>
          <select name="forma de pagamento" id="forma de pagamento">
            <option value="Cartão de Crédito">Cartão de Crédito</option>/
            <option value="Boleto">Boleto</option>/
          </select>
        </div>
        <div
          className="nome do cartão">
          <label htmlFor="nome do cartão">Nome do Cartão *</label>
          <input type="text" id="nome do cartão" placeholder="Insira o nome"></input>

        </div>

      </div></>
  );
  };

export default Confirmacao;


