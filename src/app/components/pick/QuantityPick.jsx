import { useDispatch } from "react-redux";
import { addItem } from "../../redux-store/cartSlice";

export const QuantityPick = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-8 rounded-2xl p-2 bg-primary text-white order-3 lg:order-1">
            <span onClick={() => dispatch(addItem({ id: item.id, quantity: -1 }))}>-</span>
            <span>{item.quantity}</span>
            <span onClick={() => dispatch(addItem({ id: item.id, quantity: 1 }))}>+</span>
        </div>

    );
};
