import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectItems, selectTotalCost, selectTotalQuantity } from "../redux-store/cartSlice";
import { RiRestartLine } from "react-icons/ri";
import ProductCarousel from "../components/carrousel/ProductCarrousel";
import { useEffect } from "react";
import { URL_BACK_PRODUCTS_BY_TAGS } from "../constants/urls/urlBackEnd";
import { useState } from "react";
import apiBackEnd from "../api/backend/api.Backend";

export const PickView = () => {
  const dispatch = useDispatch();
  const paniers = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalCost);
  const totalQuantity = useSelector(selectTotalQuantity);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiBackEnd.post(URL_BACK_PRODUCTS_BY_TAGS, {
      "tag_ids": [1931, 1957, 1910, 1942],
      "product_ids": [2469, 2502]
    })
      .then(response => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products By tags", error);
      })
  }, []);

  return (
    <div className="flex flex-col mx-2 mt-9 md:mt-0">
      <h2 className="text-5xl">Panier ({totalQuantity} article)</h2>
      <div className="flex flex-col justify-around lg:flex-row lg:mt-7 lg:gap-10 lg:px-10">

        <div className="flex flex-col grow gap-6 mt-6 lg:mt-0">
          {totalQuantity === 0 ? (<h3 className="mt-6 text-4xl">Votre panier est vide</h3>) : paniers.map((item) => (
            <div key={item.id} className="drop-shadow-lg bg-white rounded-xl p-4 flex flex-col ">
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
                    <a className="hover:underline" onClick={() => dispatch(removeItem({ id: item.id }))}>Supprimer</a>
                    <span className="border-r border-black h-full"></span>
                    <a className="hover:underline" onClick={() => dispatch(removeItem({ id: item.id }))} >Mettre de côté</a>
                  </div>
                </div>

              </div>
              <div className="flex justify-between items-center sm:justify-around lg:hidden">
                <a className="hover:underline" onClick={() => dispatch(removeItem({ id: item.id }))}>Supprimer</a>
                <a className="hover:underline" onClick={() => dispatch(removeItem({ id: item.id }))}>Mettre de côté</a>
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


          {totalQuantity === 0 ? <></> :
            <div className="flex flex-col rounded-2xl lg:border lg:border-primary lg:p-4">
              <>
                <div className="flex justify-between mt-6"><span className="font-bold ">Prix total ({totalQuantity} article)</span> <span>{totalPrice / 100}€</span></div>
                <div className="flex justify-between mt-2"><span className="">Frais de livraison</span> <span>Gratuit</span></div>
                <div className="flex justify-between mt-2"><span className="">Taxe</span> <span>29€</span></div>
                <div className="flex justify-between mt-2"><span className="font-bold">Prix TTC</span><span>{parseFloat(totalPrice + 2900) / 100}€</span></div>
                <div className="flex flex-col my-6 gap-2 lg:hidden">
                  {isLoading ? (
                    <div role="status" className="h-36 flex justify-center items-center">
                      <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-2xl font-medium">ARTICLES SIMILAIRES</h4>
                      <ProductCarousel products={products} />
                    </>
                  )}
                </div>
                <hr className="h-px  my-8 border-1 border-slate-600 lg:hidden" />
                <div className="flex flex-col lg:order-first">
                  <a className="btn-primary-outline self-center w-11/12 text-xl ">Continuer pour payer</a>
                  <span className="text-center">Pour une meilleur experience, <a className="underline">créer un compte.</a></span>
                </div>
              </>
            </div>
          }
        </div>
      </div>
      <div className="hidden flex-col my-6 gap-2 lg:flex">
        {isLoading ? (
          <div role="status" className="h-36 flex justify-center items-center">
            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
        ) : (
          <>
            <h4 className="text-2xl font-medium">ARTICLES SIMILAIRES</h4>
            <ProductCarousel products={products} />
          </>
        )}
      </div>

    </div>
  );
}

export default PickView;