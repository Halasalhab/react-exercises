import { useState, useMemo } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home cartItems={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
