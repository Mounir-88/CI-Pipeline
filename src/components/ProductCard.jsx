import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imgStyle} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} style={buttonStyle}>
        View Details
      </Link>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '8px',
  textAlign: 'center',
  width: '200px',
  margin: '10px',
  backgroundColor: 'white',
};

const imgStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

const buttonStyle = {
  padding: '5px 10px',
  textDecoration: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  borderRadius: '4px',
};

export default ProductCard;
