import axios from 'axios';
import { useState } from 'react';
import { formatMoney } from "../../../utils/money";

export function CartItemDetails({ cartItem, getAppData }) {

  const [ isUpdated, setIsUpdated ] = useState(false);
  const [ quantity, setQuantity ] = useState(cartItem.quantity);

  function showInput(){
    setIsUpdated(true);
  }

  function updateQuantity(event){
    console.log(event.target.value);
    setQuantity(event.target.value);
  }

  async function saveUpdatedQuantity() {
    await axios.put(`/api/cart-items/${cartItem.product.id}`, {
      quantity: Number(quantity)
  });

    await getAppData();
    setIsUpdated(false);
  }

  function handleKeyDown(event) {
  if (event.key === 'Enter') {
    saveUpdatedQuantity();
  }

  if (event.key === 'Escape') {
    setQuantity(cartItem.quantity);
    setIsUpdated(false);
  }
}


  
  return (
    <>
      <img className="product-image" src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            { isUpdated && <input value={quantity} onChange={updateQuantity} onKeyDown={handleKeyDown} className='cartItemInput' type="text"/> }
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary" onClick={isUpdated ? saveUpdatedQuantity : showInput}>
            {isUpdated ? 'Save' : 'Update'}
          </span>
          <span className="delete-quantity-link link-primary" >Delete</span>
        </div>
      </div>
    </>
  );
}
