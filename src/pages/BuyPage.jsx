import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function BuyPage() {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  // 🧮 Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05; // 5% tax example
  const total = subtotal + tax;

  const handleClearCart = () => {
    dispatch({ type: "SET_CART", payload: [] });
    localStorage.removeItem("cart");
  };

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Your cart is empty 🛒
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/")}>
          Continue Shopping
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Checkout Summary
      </Typography>

      <Grid container spacing={3}>
        {/* 🛍️ Cart Items Section */}
        <Grid size={{ xs: 12, md: 8  }}>
          {cart.map((item) => (
            <Card key={item.id} sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 90,
                    height: 90,
                    objectFit: "contain",
                    borderRadius: 2,
                  }}
                />

                <Box sx={{ flexGrow: 1, ml: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* 💳 Summary Section */}
        <Grid size={{ xs: 12, md: 4 }} >
          <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Order Summary
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Subtotal</Typography>
              <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Typography>Tax (5%)</Typography>
              <Typography>${tax.toFixed(2)}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" color="primary">
                ${total.toFixed(2)}
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mb: 2, borderRadius: 2 }}
              onClick={() => alert("Proceeding to payment...")}
            >
              Proceed to Payment
            </Button>

            <Button
              fullWidth
              variant="outlined"
              color="error"
              sx={{ borderRadius: 2 }}
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
