import { useDispatch } from "react-redux";
import { removeItem } from "../../redux-store/cartSlice";

export const BoutonDeletePick = ({id,text}) => {
    const dispatch = useDispatch()
    return (
        <a className="hover:underline" onClick={() => dispatch(removeItem({ id: id }))}>{text}</a>
    );
};