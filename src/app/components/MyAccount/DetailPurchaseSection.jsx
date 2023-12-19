import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { URL_ACCOUNT } from "../../constants/urls/urlFrontEnd";

export const DetailPurchaseSection = ({ purchase }) => {
    const navigate = useNavigate();
    console.log(purchase);
    let totalPrice = 0;

    purchase.picks.forEach((pick,index)=>{
        totalPrice += pick.priceitem * pick.quantity
    })

    return (
        <div>
            <span className="flex items-center text-xl hover:cursor-pointer" onClick={() => navigate(URL_ACCOUNT)}><IoIosArrowBack /> Retour</span>
            <div className="bg-white flex flex-col gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
                <h4 className="text-center">Commande n°{purchase.reference}</h4>
                <h5>Etat de la commande : {purchase.status.name}</h5>
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                    <div className="lg:order-2">
                        <div className="bg-secondary p-4 rounded-xl ">
                            <h5>Adresse de livraison</h5>
                            <p className="">
                                {purchase.addresses.streetNumber} {purchase.addresses.streetName}
                            </p>
                            <p className="">
                                {purchase.addresses.zipcode} {purchase.addresses.city}
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 lg:order-1">
                        {purchase.picks.map(pick => (
                            <div className="bg-secondary p-4 rounded-xl flex gap-4 items-center">
                                <img src={pick.product.pictures[0].url} className="h-32" />
                                <h6>{pick.product.name}</h6>
                            </div>
                        ))}
                    </div>
                </div>


                <div className=" flex justify-between  px-4 lg:self-end lg:gap-10">
                    <p className="font-bold text-xl">Montant total <span className="text-sm font-normal">(TVA incluse)</span></p>
                    <p className="font-bold text-xl text-red-500">{totalPrice/100}€</p>
                </div>
            </div>
        </div>
    );
}