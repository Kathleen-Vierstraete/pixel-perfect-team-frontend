import { useSelector } from "react-redux";
import { selectItems, selectTotalCost, selectTotalQuantity } from "../redux-store/cartSlice";
import ProductCarousel from "../components/carrousel/ProductCarrousel";
import { useEffect } from "react";
import { URL_BACK_PRODUCTS_BY_TAGS } from "../constants/urls/urlBackEnd";
import { useState } from "react";
import apiBackEnd from "../api/backend/api.Backend";
import { ProductPick } from "../components/pick/ProductPick";
import { Spinner } from "../components/animation/Spinner";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { URL_CHECKOUT, URL_CONNEXION, URL_CREATEACCOUNT, URL_HOME } from "../constants/urls/urlFrontEnd";
import { selectIsLogged } from "../redux-store/authenticationSlice";


export const PickView = () => {
  const paniers = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalCost);
  const totalQuantity = useSelector(selectTotalQuantity);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const productIds = () => {
    let test = paniers.map(item => item.id).join(",");
    return test;
  }
  const isAuthenticated = useSelector(selectIsLogged);
  
  useEffect(() => {
    apiBackEnd.post(URL_BACK_PRODUCTS_BY_TAGS, {
      "product_ids": [productIds()]
    })
      .then(response => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products By tags", error);
      })
  }, [paniers]);

  return (
    <div className="flex flex-col mx-2 mt-9 md:mt-0">
      <Link to={URL_HOME} className="text-xl flex items-center mb-2">
        <IoIosArrowBack />
        <span>Poursuivre mes achats</span>
      </Link>
      <h2 className="text-5xl">Panier ({totalQuantity} article)</h2>
      <div className="flex flex-col justify-around lg:flex-row lg:mt-7 lg:gap-10 lg:px-10">

        <div className="flex flex-col grow gap-6 mt-6 lg:mt-0">
          {totalQuantity === 0 ? (
            <h3 className="mt-6 text-4xl">Votre panier est vide</h3>)
            : paniers.map((item) => (
              <ProductPick key={item.id} item={item} />
            ))}
        </div>
        <div>


          {totalQuantity === 0 ? <></> :
            <div className="flex flex-col rounded-2xl lg:border lg:border-primary lg:p-4">
              <>
                <div className="flex justify-between mt-6"><span className="font-bold ">Prix total ({totalQuantity} article)</span> <span>{totalPrice / 100}€</span></div>
                <div className="flex justify-between mt-2"><span className="">Frais de livraison</span> <span>Gratuit</span></div>
                <div className="flex justify-between mt-2"><span className="">Taxe</span> <span>29€</span></div>
                <div className="flex justify-between mt-2"><span className="font-bold">Prix TTC</span><span>{(totalPrice + 2900) / 100}€</span></div>
                <div className="flex flex-col my-6 gap-2 lg:hidden">
                  {isLoading ? (
                    <Spinner message="Aucun article similaire trouvé" />
                  ) : (
                    <>
                      <h4 className="text-2xl font-medium">ARTICLES SIMILAIRES</h4>
                      <ProductCarousel products={products} />
                    </>
                  )}
                </div>
                <hr className="h-px  my-8 border-1 border-slate-600 lg:hidden" />
                {!isAuthenticated ? (
                <div className="flex flex-col lg:order-first">

                  <Link to={URL_CONNEXION} className="btn-primary-outline self-center w-11/12 text-xl">Continuer pour payer</Link> 
                  <span className="text-center">Pour une meilleur experience, <Link to={URL_CREATEACCOUNT} className="underline">créez un compte.</Link></span>
                  
                  </div>)
                  : (
                  <div className="flex flex-col lg:order-first">
                  <Link to={URL_CHECKOUT} className="btn-primary-outline self-center w-11/12 text-xl">Continuer pour payer</Link>
                  <span className="text-center">Encore une étape pour finaliser votre achat</span>
                </div> )}
              </>
            </div>
          }
        </div>
      </div>
      <div className="hidden flex-col my-6 gap-2 lg:flex">
        {isLoading ? (
          <Spinner message="Aucun article similaire trouvé" />
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