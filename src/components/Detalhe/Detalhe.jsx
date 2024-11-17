import React, { useState } from 'react';
import './Detalhe.css';
import Sneakers from "../../assets/Detalhe/White-Sneakers-PNG.png"
import Img1 from "../../assets/Carrossel/image1.png"
import Img2 from "../../assets/Carrossel/image2.png"
import Img3 from "../../assets/Carrossel/image3.png"
import Img4 from "../../assets/Carrossel/image4.png"
import Img5 from "../../assets/Carrossel/image5.png"
import { Link } from 'react-router-dom';

function Detalhe() {
    const [selectedSize] = useState(41);
    const [selectedColor] = useState('red');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [Sneakers, Img1, Img1, Img1, Img1, Img1];

    const handlePrevClick = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <section className='section-detalhe'>
            <div className='container'>
                <nav className='breadcrumb'>
                    <a href="#">Home  /</a>
                    <a href="#"> Produtos  /</a>
                    <a href="#"> Tênis  /</a>
                    <a href="#"> Nike  /</a>
                    <p> Tênis Nike Revolution 6 Next Nature Masculino</p>
                </nav>
                <div className='product'>
                    <div className='image-gallery'>
                        <button className="prev" onClick={handlePrevClick}>&lt;</button>
                        <img src={images[currentImageIndex]} alt="Tênis Nike Revolution 6 Next Nature Masculino" className='main-image' />
                        <button className="next" onClick={handleNextClick}>&gt;</button>
                    </div>

                    <div className='details'>
                        <h3 id='h3Shoes'>Tênis Nike Revolution<br />6 Next Nature Masculino</h3>
                        <p className='category'>Casual | Nike | REF: 38416711</p>
                        <div className='rating'>
                            <span className='stars'>⭐⭐⭐⭐⭐</span>
                            <span className='rating-value'>4.7</span>
                            <span className='reviews'>(90 avaliações)</span>
                        </div>
                        <div className='price'>
                            <span className='current-price'>R$ 219,00</span>
                            <span className='original-price'>219,00</span>
                        </div>
                        <p className="products-description">Descrição do poduto</p>
                        <div className='description'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br /> enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                        <div className='sizes'>
                            <h2 id='sizeOptions'>Tamanhos</h2>
                            <div className='size-options'>
                                {[39, 40, 41, 42, 43].map(size => (
                                    <button
                                        key={size}
                                        className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='colors'>
                            <h2>Cor</h2>
                            <div className='color-options'>
                                {['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'].map(color => (
                                    <button
                                        key={color}
                                        className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                        <Link to="/ConfirmacaoDeCompra"><button className='buy-button'>COMPRAR</button></Link>
                    </div>
                </div>
                <div className="thumbnails">
                    <div><img src={Img1} alt="" className='tamanho' /></div>
                    <div><img src={Img2} alt="" /></div>
                    <div><img src={Img3} alt="" /></div>
                    <div><img src={Img4} alt="" /></div>
                    <div><img src={Img5} alt="" /></div>
                </div>
            </div>
        </section>
    );
};

export default Detalhe;
