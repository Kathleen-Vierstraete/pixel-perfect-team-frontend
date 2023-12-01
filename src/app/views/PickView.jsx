import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, selectItems, selectTotalCost, selectTotalQuantity } from "../redux-store/cartSlice";

export const PickView = () => {
  const dispatch = useDispatch();
  const paniers = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalCost);
  const totalQuantity = useSelector(selectTotalQuantity);
  const image = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {paniers.map((item) => (
          <li key={item.id}>
            <img src={item.image} />{item.name} - {item.id} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Prix total {totalPrice}</p>
      <p>quantity total {totalQuantity}</p>
      <button onClick={() => dispatch(addItem({ id: 1, price: 1218, quantity: 1, name: "Product 1", image: image }))}>Add Product 1</button>
      <button onClick={() => dispatch(addItem({ id: 2, price: 123142, quantity: 1, name: "Product 2", image: image }))}>Add Product 2</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default PickView;