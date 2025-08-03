import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useSnackbar } from '../context/SnackbarContext';

export default function CartItem({ item }) {
  const { dispatch } = useCart();
  const { showMessage } = useSnackbar();


  const handleRemove = () => {
    dispatch({ type: 'REMOVE', payload: item.id });
    showMessage('Item added to cart', 'success');
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <img src={item.image} alt={item.title} height="100" />

      <Typography>{item.title}</Typography>
      <Typography>Qty: {item.quantity}</Typography>
      <Box>
        <Button
          onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
        >
          +
        </Button>
        <Button
          onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
        >
          -
        </Button>
        <Button onClick={handleRemove}>
          Remove
        </Button>
      </Box>
    </Box>
  );
}
