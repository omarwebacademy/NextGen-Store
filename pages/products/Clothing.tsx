import React from 'react';
import { ProductListing } from '../ProductListing';

export const ClothingPage: React.FC = () => {
  return <ProductListing categoryOverride="clothing" />;
};