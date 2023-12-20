import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { selectToken, selectUser, signOut } from "../redux-store/authenticationSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { URL_CONNEXION } from "../constants/urls/urlFrontEnd";
import { LeftBox } from '../components/MyAccount/LeftBox';
import { RightContent } from '../components/MyAccount/RightContent';
import { FaBars } from "react-icons/fa";
import apiBackEnd from '../api/backend/api.Backend';
import { URL_BACK_PERSON, URL_BACK_PURCHASE } from '../constants/urls/urlBackEnd';
import { setHearderToken } from '../services/tokenServices';
import { Spinner } from '../components/animation/Spinner';
import AccountSection from '../components/MyAccount/AccountSection';
import PurchaseSection from '../components/MyAccount/PurchaseSection';
import AddresseSection from '../components/MyAccount/AdresseSection';
import CommentSection from '../components/MyAccount/CommentSection';
import { DetailPurchaseSection } from '../components/MyAccount/DetailPurchaseSection';


const MyAccountView = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [activeBox, setActiveBox] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [addresseUpToDate, setAddresseUpToDate] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()

  const toggleAddresse = () => {
    setAddresseUpToDate(!addresseUpToDate);
  }



  useEffect(() => {
    (async () => {
      try {
        const res = await apiBackEnd.get(URL_BACK_PERSON(user.id), setHearderToken(token));
        res.data.purchases.sort((a,b)=>{return new Date(a.dateExpectedDelivery) - new Date(b.dateExpectedDelivery);})
        setUserInfo(res.data);
      } catch (error) {
        console.error('Error fetching person:', error);
      }
    })();
  }, [addresseUpToDate]);


  const RenderRightContent = () => {
    switch (activeBox) {
      case 'Mon compte':
        return !userInfo ? (<Spinner message="Vos données ne sont pas recuperer" />) : (<AccountSection user={userInfo} setUser={setUserInfo} token={token} />)
      case 'Mes adresses':
        return !userInfo ? (<Spinner message="Vos données ne sont pas recuperer" />) : (<AddresseSection toggleUpToDate={toggleAddresse} addresses={userInfo.addresses} token={token} />)
      case 'Mes commentaires':
        return !userInfo ? (<Spinner message="Vos données ne sont pas recuperer" />) : (<CommentSection comments={userInfo.comments} token={token} />);
      default:
        return !userInfo ? (
          <Spinner message="Vos données ne sont pas recuperer" />
        ) : (
          searchParams.get("purchase") ?
            (
              <DetailPurchaseSection purchase={userInfo.purchases.find(purchase => purchase.reference === searchParams.get("purchase"))} />
            ) : (
              <PurchaseSection purchases={userInfo.purchases} />
            )
        )
    }
  };

  const ToggleMenu = () => {
    setMenuAccount(!showMenuAccount);
  };

  const handleBoxClick = (title) => {
    setActiveBox(title);
    ToggleMenu();
  };

  const handleLogout = () => {
    dispatch(signOut());
    navigate(URL_CONNEXION);
  };

  const [showMenuAccount, setMenuAccount] = useState(false);
  return (
    <div className='mx-10 mb-8' >
      <div className="flex justify-center ">
        <h5 className="mb-16 font-SilkScreen">Bonjour {user.userFirstName}</h5>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-start gap-2">

        <button className="bg-primary text-white font-semibold py-2 px-4 rounded-md lg:hidden" aria-label="Menu" onClick={ToggleMenu}>
          <span className="cursor-pointer">
            <FaBars />
          </span>
        </button>

        {showMenuAccount &&
          <div className="lg:hidden flex flex-col items-stretch self-stretch">
            <LeftBox title="Mes commandes" onClick={() => handleBoxClick('Mes commandes')} />
            <LeftBox title="Mon compte" onClick={() => handleBoxClick('Mon compte')} />
            <LeftBox title="Mes adresses" onClick={() => handleBoxClick('Mes adresses')} />
            <LeftBox title="Mes commentaires" onClick={() => handleBoxClick('Mes commentaires')} />
          </div>
        }

        <div className="hidden lg:flex flex-col sm:w-1/2 lg:w-1/4">
          <LeftBox title="Mes commandes" onClick={() => handleBoxClick('Mes commandes')} />
          <LeftBox title="Mon compte" onClick={() => handleBoxClick('Mon compte')} />
          <LeftBox title="Mes adresses" onClick={() => handleBoxClick('Mes adresses')} />
          <LeftBox title="Mes commentaires" onClick={() => handleBoxClick('Mes commentaires')} />
        </div>

        <div className="flex flex-col lg:w-3/4 sm:w-full mr-1 self-stretch lg:self-auto">
          {RenderRightContent()}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn-primary-outline py-2 px-6" onClick={handleLogout}>
          Me déconnecter
        </button>
      </div>
    </div>
  );
};

export default MyAccountView;

