import { Items } from './items';

export function Data({items, cart, setCart}){
  return(
   <>
    {items.map((item) =>{
        return(
          <>
          <Items 
            itemImage={item.itemImage}
            itemName={item.itemName}
            itemPrice={item.itemPrice}
            key={item.id}
            cart={cart} 
            setCart={setCart}
          /> 
          </>
        )
      })}
   </>
  )
}