import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux-store/cartSlice";
import { selectToken, selectUser } from "../../redux-store/authenticationSlice";
import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_PICK_BY_USER } from "../../constants/urls/urlBackEnd";
import { setHearderToken } from "../../services/tokenServices";

export const BoutonDeletePick = ({ id, text }) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const deletePick = (id) => {
        dispatch(removeItem({ id: id }))
        if (user) {
            apiBackEnd.delete(URL_BACK_PICK_BY_USER(user.id), setHearderToken(token))
                .then(res => {
                    if (res.status === 200) {
                        console.log("Pick suppress succeful")
                    }
                }).catch(error => {
                    console.error("Error pick suppresion ", error)
                })
        }
    }
    return (
        <a className="hover:underline" onClick={() => deletePick(id)}>{text}</a>
    );
};