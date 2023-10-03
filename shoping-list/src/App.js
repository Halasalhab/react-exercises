import { useState, useMemo } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckOut from './pages/CheckOut';
import { CartItemsContext } from './CartContext';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  return (
    <>
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home totalPrice={totalPrice} />} />
            <Route
              exact
              path="/checkout"
              element={<CheckOut />} />
          </Routes>
        </Router>
      </CartItemsContext.Provider>
    </>
  );
}

export default App;
