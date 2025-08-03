import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SnackbarProvider } from './context/SnackbarContext';
import { AppBar, Toolbar, Button } from '@mui/material';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default function App() {
  return (
    <SnackbarProvider>
    <CartProvider>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/cart">Cart</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
    </SnackbarProvider>
  );
}
