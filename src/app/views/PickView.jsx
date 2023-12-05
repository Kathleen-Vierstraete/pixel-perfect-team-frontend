import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectItems, selectTotalCost, selectTotalQuantity} from "../redux-store/cartSlice";
import { RiRestartLine } from "react-icons/ri";
import ProductCarousel from "../components/layouts/ProductCarrousel";

export const PickView = () => {
  const dispatch = useDispatch();
  const paniers = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalCost);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className="flex flex-col mx-2 mt-9 md:mt-0">
      <h2>Panier ({totalQuantity} article)</h2>
      <div className="flex flex-col justify-around lg:flex-row lg:mt-7 lg:gap-10 lg:px-10">

        <div className="flex flex-col grow gap-6 mt-6 lg:mt-0">
          {totalQuantity === 0 ? (<h3 className="mt-6">Votre panier est vide</h3>) : paniers.map((item) => (
            <div className="drop-shadow-lg bg-white rounded-xl p-4 flex flex-col ">
              <div className="flex gap-4">
                <img className="w-[100px] lg:w-[200px]" src={item.image} alt={item.name} />
                <div className="flex flex-col justify-between self-stretch lg:w-full">
                  <div className="flex  items-baseline justify-between">
                    <h4 className="text-2xl">{item.name}</h4>
                    <p className="hidden lg:inline">{item.price / 100}€</p>
                  </div>
                  <div className="flex gap-2 items-baseline"><RiRestartLine /> <p>Retour gratuit jusqu'au 12 janvier 2023</p></div>

                  <div className="hidden self-start gap-4 justify-between items-center sm:justify-around lg:flex">
                    <div className="flex gap-8 rounded-2xl p-2 bg-primary text-white ">
                      <span onClick={() => dispatch(addItem({ id: item.id, quantity: -1 }))}>-</span>
                      <span>{item.quantity}</span>
                      <span onClick={() => dispatch(addItem({ id: item.id, quantity: 1 }))}>+</span>
                    </div>
                    <span className="border-r border-black h-full"></span>
                    <a onClick={() => dispatch(removeItem())} className="hover:underline">Supprimer</a>
                    <span className="border-r border-black h-full"></span>
                    <a className="hover:underline" >Mettre de côté</a>
                  </div>
                </div>

              </div>
              <div className="flex justify-between items-center sm:justify-around lg:hidden">
                <a onClick={() => dispatch(removeItem())} className="hover:underline">Supprimer</a>
                <a className="hover:underline" >Mettre de côté</a>
                <div className="flex gap-3 rounded-2xl p-2 bg-primary text-white">
                  <span onClick={() => dispatch(addItem({ id: item.id, quantity: -1 }))}>-</span>
                  <span>{item.quantity}</span>
                  <span onClick={() => dispatch(addItem({ id: item.id, quantity: 1 }))}>+</span>
                </div>
              </div>

            </div>
          ))}
        </div>
        <div>


          <div className="flex flex-col rounded-2xl lg:border lg:border-primary lg:p-4">
            {totalQuantity === 0 ? <></> :
              <>
                <div className="flex justify-between mt-6"><span className="font-bold ">Prix total ({totalQuantity} article)</span> <span>{totalPrice / 100}€</span></div>
                <div className="flex justify-between mt-2"><span className="">Frais de livraison</span> <span>Gratuit</span></div>
                <div className="flex justify-between mt-2"><span className="">Taxe</span> <span>29€</span></div>
                <div className="flex justify-between mt-2"><span className="font-bold">Prix TTC</span><span>{parseFloat(totalPrice + 2900) / 100}€</span></div>
                <hr className="h-px  my-8 border-1 border-slate-600 lg:hidden" />
                <div className="flex flex-col lg:order-first">
                  <a className="btn-primary-outline self-center w-11/12 text-xl ">Continuer pour payer</a>
                  <span className="text-center">Pour une meilleur experience, <a className="underline">créer un compte.</a></span>
                </div>
              </>
            }
          </div>
        </div>     
      </div>
    </div>
  );
}

export default PickView;