import React from 'react';
import './EcommercePage.css';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$40', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$50', image: 'https://via.placeholder.com/150' },
];

const EcommercePage = () => {
  return (
    <div className="ecommerce-page">
      <header className="header">
        <div className="logo">E-Shop</div>
        <input type="text" className="search-bar" placeholder="Search for products..." />
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
          <a href="#">Cart</a>
        </nav>
      </header>

      <div className="banner">
        <h2>Big Sale! Up to 50% Off</h2>
        <p>Shop now and save big on your favorite items.</p>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommercePage;