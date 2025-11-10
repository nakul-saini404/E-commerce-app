import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Box, Typography, Grid } from '@mui/material';
import { fetchProducts } from '../api/product';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h4" sx={{margin:"30px 0"}} textAlign={"center"}>Products</Typography>
     <Grid container spacing={3} alignItems="stretch" justifyContent="center" >
        {products.map((product) => (
          <Grid size={{ xs: 12, md: 12 ,lg:6 }} key={product.id}  sx={{ display: "flex", alignItems:"center", justifyContent:"center" }} >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
