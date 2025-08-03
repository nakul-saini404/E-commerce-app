import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useSnackbar } from "../context/SnackbarContext";

export default function CartItem({ item }) {
  const { dispatch } = useCart();
  const { showMessage } = useSnackbar();

  const handleRemove = () => {
    dispatch({ type: "REMOVE", payload: item.id });
    showMessage("Item removed from cart", "success");
  };

  if (!item || !item.image) return null;

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        mb: 2,
        p: 2,
        backgroundColor: "#fafafa",
      }}
    >
      {/* Product Image */}
      <Box sx={{ width: "20%", display: "flex", justifyContent: "center" }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ height: "80px", objectFit: "contain" }}
        />
      </Box>

      {/* Product Title */}
      <Typography sx={{ width: "25%", fontWeight: 500 }}>
        {item.title}
      </Typography>

      {/* Quantity */}
      <Typography sx={{ width: "15%" }}>
        {item.quantity}
      </Typography>

      {/* Action Buttons */}
      <Box sx={{ width: "25%" }} display="flex" gap={1} justifyContent="center">
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
        >
          +
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
          disabled={item.quantity <= 1}
        >
          -
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={handleRemove}
        >
          Remove
        </Button>
      </Box>

      {/* Total */}
      <Typography sx={{ width: "15%", fontWeight: 500 }}>
        ${(item.price * item.quantity).toFixed(2)}
      </Typography>
    </Box>
  );
}
