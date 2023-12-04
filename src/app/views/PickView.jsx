import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem, selectItems, selectTotalCost, selectTotalQuantity, updateQuantity } from "../redux-store/cartSlice";
import { useState } from "react";

export const PickView = () => {
  const dispatch = useDispatch();
  const paniers = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalCost);
  const totalQuantity = useSelector(selectTotalQuantity);
  const image = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  console.log(quantity);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {paniers.map((item) => (
          <li key={item.id}>
            <img src={item.image} />{item.name} - {item.id} - Quantity: {item.quantity} -  -
            <button onClick={() => dispatch(removeItem({ id: item.id }))} >REMOVE</button>
          </li>
        ))}
      </ul>
      <p>Prix total {totalPrice}</p>
      <p>quantity total {totalQuantity}</p>
      <button onClick={() => dispatch(addItem({ id: 1, price: 1218, quantity: quantity, name: "Product 1", image: image }))}>Add Product 1</button>
      <select
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="0"
              max="10"
            >
              {Array(11).fill(null).map((_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <br />
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default PickView;