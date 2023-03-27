import React from 'react';
import { Product } from '../../components';

const products = [
  {
    name: 'Lot 1',
  },
  {
    name: 'Lot 2',
  },
];

export const Products = () => (
  <div>
    <h2>Products</h2>
    {products.map(({ name }) => (
      <Product name={name} />
    ))}
  </div>
);
