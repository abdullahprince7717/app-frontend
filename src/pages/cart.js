
import Main from '../components/cart_components/Main';
import Basket from '../components/cart_components/Basket';
import useFetch from '../hooks/useFetch'
// import data from './data';
import { useState } from 'react';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const { loading, error, data } = useFetch('http://localhost:1337/products')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  console.log(data)
  
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <div className="row">
        <Main products= {data} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket> 
      </div> 
    </div>
);
}

export default App;