import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import BuyPage from "./pages/BuyPage";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggleButton from "./theme";

export default function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <CartProvider>
          <Router basename="/E-commerce-app">
            <AppBar position="static">
              <Toolbar
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <Button color="inherit" component={Link} to="/">
                    Home
                  </Button>
                  <Button color="inherit" component={Link} to="/cart">
                    Cart
                  </Button>
                </Box>

                <ThemeToggleButton />
              </Toolbar>
            </AppBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/buy" element={<BuyPage />} />
            </Routes>
          </Router>
        </CartProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
