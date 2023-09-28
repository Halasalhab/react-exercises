import { useState } from 'react';
import './App.css';
import Products from './pages/Products';

function App() {
  const [products, setProducts] = useState([{ name: 'Nike boots', price: '125', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c90322f5-a798-4183-abf7-577dcb1ac860/city-classic-womens-boots-QTgPCN.png'}, { name: 'Nike boots', price: '125', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c90322f5-a798-4183-abf7-577dcb1ac860/city-classic-womens-boots-QTgPCN.png' }, { name: 'Nike boots', price: '125', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c90322f5-a798-4183-abf7-577dcb1ac860/city-classic-womens-boots-QTgPCN.png' }])
  return (
    <>
      <Products products={products}/>
    </>
  );
}

export default App;
