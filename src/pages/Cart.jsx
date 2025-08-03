import CartItem from '../components/CartItem';
import { Box, Typography } from '@mui/material';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box p={3}>
      <Typography variant="h4">Cart</Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
        </>
      )}
    </Box>
  );
}
