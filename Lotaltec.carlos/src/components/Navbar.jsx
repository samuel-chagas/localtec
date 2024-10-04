import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdOutlineSearch, MdLocalGroceryStore } from "react-icons/md";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Balança Determinadora de Umidade", description: "Bel M5 Thermo 163L", price: "R$ 7.297,00" },
    { id: 2, name: "Item 2", description: "Descrição do item 2.", price: "R$ 30,00" },
    { id: 3, name: "Item 3", description: "Descrição do item 3.", price: "R$ 20,00" },
  ];

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">LocalTec</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/main">Produtos</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Link de login */}
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Pesquisar" />
        <button type="submit"> <MdOutlineSearch /></button>
      </div>

      <div className="cart">
        <li>
          <div onClick={toggleCart} className="cart-icon">
            <MdLocalGroceryStore />
          </div>
        </li>

        {cartOpen && (
          <div className="cart-dropdown">
            <ul>
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <p className="item-description">{item.description}</p>
                    <span className="item-price">{item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/cart" className="view-cart-button">
              Ver carrinho completo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
