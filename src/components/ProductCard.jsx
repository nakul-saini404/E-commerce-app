import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useSnackbar } from "../context/SnackbarContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { cart, dispatch } = useCart();
  const { showMessage } = useSnackbar();
  const inCart = cart.some((item) => item.id === product.id);
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!inCart) {
      dispatch({ type: "ADD", payload: product });
      showMessage("Item added to cart", "success");
    } else {
      navigate("/cart");
    }
  };

  const handleBuyNow = () => {
    // You can pass product data to the new page using state
    navigate("/buy", { state: { product } });
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        borderRadius: 3,
        boxShadow: 4,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-5px) scale(1.02)",
          boxShadow: 6,
        },
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center",
          p: 3,
          width: "100%",
        }}
      >
        <Grid container alignItems="center" spacing={3} justifyContent="space-between">
          {/* 🖼️ Product Image (5 columns) */}
          <Grid size={{ xs: 12, md: 5 }} textAlign="center">
            {/* <img
              src={product.image}
              alt={product.title}
              height="80%"
              width="80%"
              style={{
                // objectFit: "contain",
                marginTop: "20px",
              }}
            /> */}
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{
                width: { xs: 180, sm: 220, md: 200, xl: 260 }, // ✅ uniform width across all cards
                height: { xs: 180, sm: 220, md: 240 }, // ✅ uniform height across all cards
                objectFit: "contain", // ✅ keeps full image visible
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
                display: "block",
                mx: "auto", // ✅ center horizontally
              }}
            />
          </Grid>

          {/* 📝 Product Title (3 columns) */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontWeight: 500, mb: 2 }}
            >
              ${product.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                onClick={() => handleAdd(product)}
                variant="contained"
                color="primary"
                sx={{ minWidth: "120px", borderRadius: 2 }}
              >
                {inCart ? "Go to Cart" : "Add to Cart"}
              </Button>
              <Button
                onClick={handleBuyNow}
                variant="contained"
                color="secondary"
                sx={{ minWidth: "120px", borderRadius: 2 }}
              >
                Buy Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
