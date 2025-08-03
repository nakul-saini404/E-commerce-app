import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Box, Typography } from '@mui/material';
import { fetchProducts } from '../api/product';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4">Products</Typography>
      <Box display="flex" flexWrap="wrap">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
