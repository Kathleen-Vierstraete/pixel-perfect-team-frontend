import { RiRestartLine } from "react-icons/ri";
import { QuantityPick } from "./QuantityPick";
import { BoutonDeletePick } from "./BoutonDeletePick";
import { useNavigate } from 'react-router-dom';
import { URL_PRODUCT_BY_ID } from "../../constants/urls/urlFrontEnd";

export const ProductPick = ({ item }) => {
    const navigate = useNavigate()

    return (
        <div key={item.id} className="drop-shadow-lg bg-white rounded-xl p-4 flex flex-col ">
            <div className="flex gap-4">
                <img onClick={() => navigate(URL_PRODUCT_BY_ID(item.id))} className="w-[100px] lg:w-[200px] hover:cursor-pointer" src={item.image} alt={item.name} />
                <div className="flex flex-col justify-between self-stretch lg:w-full">
                    <div className="flex  items-baseline justify-between">
                        <h4 onClick={() => navigate(URL_PRODUCT_BY_ID(item.id))} className="text-2xl hover:cursor-pointer">{item.name}</h4>
                        <div className="flex gap-10 items-baseline">
                            <h6 className="hidden lg:inline">Prix Unitaire :</h6>
                            <p className="hidden lg:inline">{item.price / 100}€</p>
                        </div>
                    </div>
                    <div className="flex  items-baseline justify-between">
                        <div className="flex gap-2 items-baseline">
                            <RiRestartLine />
                            <p>Retour gratuit jusqu'au 12 janvier 2023</p>
                        </div>
                        <div className="flex gap-10 items-baseline">
                            <h6 className="hidden lg:inline">Prix Total :</h6>
                            <p className="hidden lg:inline">{item.quantity*item.price/100}€</p>
                        </div>
                    </div>
                    <div className="hidden self-start gap-4 justify-between items-center sm:justify-around lg:flex">
                        <QuantityPick item={item} />
                        <span className="border-r border-black h-full"></span>
                        <BoutonDeletePick id={item.id} text={"Supprimer"} />
                        <span className="border-r border-black h-full"></span>
                        <BoutonDeletePick id={item.id} text={"Mettre de côté"} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center sm:justify-around lg:hidden">
                <BoutonDeletePick id={item.id} text={"Supprimer"} />
                <BoutonDeletePick id={item.id} text={"Mettre de côté"} />
                <QuantityPick item={item} />
            </div>
        </div>
    );
};