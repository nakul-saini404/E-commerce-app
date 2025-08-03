import CartItem from "../components/CartItem";
import { Box, Typography, Divider } from "@mui/material";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box p={3} sx={{ textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {/* Column Headers */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ fontWeight: "bold", mb: 1, color: "gray" }}
          >
            <Typography sx={{ width: "20%" }}>Product</Typography>
            <Typography sx={{ width: "25%" }}>Details</Typography>
            <Typography sx={{ width: "15%" }}>Quantity</Typography>
            <Typography sx={{ width: "25%" }}>Actions</Typography>
            <Typography sx={{ width: "15%" }}>Total</Typography>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Cart Items */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <Typography variant="h6" sx={{ mt: 3 }}>
            Grand Total: ${total.toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
  );
}
