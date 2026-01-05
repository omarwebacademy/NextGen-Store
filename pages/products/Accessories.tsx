import React from 'react';
import { ProductListing } from '../ProductListing';

export const AccessoriesPage: React.FC = () => {
  return <ProductListing categoryOverride="accessories" />;
};