import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, selectItems, selectTotalCost, selectTotalQuantity } from "../redux-store/cartSlice";

export const PickView = () => {
  const dispatch = useDispatch();
  const paniers = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalCost);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {paniers.map((item) => (
          <li key={item.id}>
            {item.id} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Prix total {totalPrice}</p>
      <p>quantity total {totalQuantity}</p>
      <button onClick={() => dispatch(addItem({ id: 1, price:1218, quantity: 1 }))}>Add Product 1</button>
      <button onClick={() => dispatch(addItem({ id: 2, price:123142, quantity: 1 }))}>Add Product 2</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default PickView;