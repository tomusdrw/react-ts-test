import * as React from 'react';
import './Product.css';

export interface ProductType {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const Product = ({ id, name, price, description }: ProductType) => (
  <div className="product">
    <img src={`https://xpla.org/ext/lorempixel/250/250/technics/${id}`} />
    <h3>{name}</h3>
    <p>{description}</p>
    <h4 className="price">${(price / 100).toFixed(2)} zł</h4>
  </div>
);
