import { useState, useMemo } from 'react';
import './App.css';
import Products from './pages/Products';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]); 

  return (
    <>
      <Cart cartItems={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} />
      <Products cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;
