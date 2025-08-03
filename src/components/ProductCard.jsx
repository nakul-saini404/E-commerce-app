import { Card, CardContent, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';
import { useSnackbar } from '../context/SnackbarContext';


export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const { showMessage } = useSnackbar();


  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: product });
    showMessage('Item added to cart', 'success');
  };

  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardContent>
        <img src={product.image} alt={product.title} height="100" />
        <Typography variant="h6">{product.title}</Typography>
        <Typography>${product.price}</Typography>
        <Button onClick={handleAdd}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
use}
