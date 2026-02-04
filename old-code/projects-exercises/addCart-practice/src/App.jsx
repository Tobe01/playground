import { useState } from 'react';
import { Data } from '../components/data';
import { Cart } from '../components/cart';
import cottonSocks from '../src/assets/cotton-socks.png';
import plainTees from '../src/assets/plain-t-shirt.png';
import tennisBall from '../src/assets/tennis-balls.png';
import './App.css';

function App() {
  const [ cart, setCart ] = useState(0);

  const [ items, setItems ] = useState([{
    itemImage: cottonSocks,
    itemName: 'Ryan Goldsan Rough Socks',
    itemPrice: '$500 USD',
    id: crypto.randomUUID()
  }, {
    itemImage: plainTees,
    itemName: 'Plain T-Shirt',
    itemPrice: '$250 USD',
    id: crypto.randomUUID()
  }, {
    itemImage: tennisBall,
    itemName: 'Tennis Ball',
    itemPrice: '$180 USD',
    id: crypto.randomUUID()
  }])

  return(
    <div className='mainApp'>
     <div>
      <Data items={items} cart={cart} setCart={setCart} />
     </div>
     <div>
       <Cart cart={cart} setCart={cart} />
     </div>
    </div>
  )
};

export default App
