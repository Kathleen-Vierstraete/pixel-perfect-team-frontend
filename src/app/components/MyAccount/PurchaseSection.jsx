import { convertDate } from "../../services/stringifyService";
import { Spinner } from "../animation/Spinner";
import { IoIosCalendar } from "react-icons/io";
import { FaBox } from "react-icons/fa";

const PurchaseSection = ({ purchases }) => {
    return (
        <div className="bg-white flex flex-col gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
            <h4 className="self-center">Mes commandes</h4>
            {purchases.length === 0 ? (
                <Spinner message="Aucune commande" />
            ) : purchases.map((purchase) => (
                <div className="bg-secondary p-2 rounded-xl flex justify-between">
                    <div key={purchase.id} className=" flex flex-col gap-4">
                        <p className="font-medium md:hidden">Commande du {convertDate(purchase.datePurchase)}</p>
                        {purchase.dateDelivery === null ? (
                            <p className="font-bold">Commande attendu le {convertDate(purchase.dateExpectedDelivery)}</p>
                        ) : (
                            <p className="font-bold">Commande livré le {convertDate(purchase.dateDelivery)}</p>
                        )}
                        <div className="max-w-xs flex gap-2 overflow-hidden p-2 border border-primary  rounded-xl">
                            {purchase.picks.map((pick) => (
                                <img className="w-28" src={pick.product.pictures[0].url} alt="" />
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-between ">
                        <div className="flex gap-4">
                            <div className="flex gap-2 items-center">
                                <IoIosCalendar />
                                <div>
                                    <p className="font-bold">Date de commande</p>
                                    <p className="text-">{convertDate(purchase.datePurchase)}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaBox />
                                <div>
                                    <p className="font-bold">Numéro de commande</p>
                                    <p className="text-">{purchase.reference}</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn-primary self-end py-2 px-4 rounded-xl">Details de la commande</button>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default PurchaseSection;