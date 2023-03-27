import React from 'react';

interface IProductProps {
  name: string;
}

export const Product = ({ name }: IProductProps) => <div>Product: {name}</div>;
