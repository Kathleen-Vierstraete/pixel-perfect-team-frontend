import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser, signOut } from "../redux-store/authenticationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { URL_CONNEXION } from "../constants/urls/urlFrontEnd";
import { LeftBox } from '../components/MyAccount/LeftBox';
import { RightContent } from '../components/MyAccount/RightContent';
import { FaBars } from "react-icons/fa";


const MyAccountView = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [activeBox, setActiveBox] = useState(null);

  const RenderRightContent = () => {
    switch (activeBox) {
      case 'Mon compte':
        return <RightContent content="Mes informations de compte seront affichées ici." />;
      case 'Mes adresses':
        return <RightContent content="Mes adresses seront affichées ici." />;
      case 'Mes commentaires':
        return <RightContent content="Mes commentaires seront affichés ici." />;
      default:
        return <RightContent content="Mes commandes seront affichées ici." />;
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
    <div className='mx-auto mb-8' >
      <div className="flex justify-center ">
        <h5 className="mb-16 font-SilkScreen">Bonjour {user.userFirstName}</h5>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-start gap-2">

        <button className="bg-primary text-white font-semibold py-2 px-4 rounded-md lg:hidden" aria-label="Menu" onClick={ToggleMenu}>
          <span className="cursor-pointer">
              <FaBars />
          </span>
        </button>

        { showMenuAccount && 
          <div className="lg:hidden flex flex-col items-stretch self-stretch">
            <LeftBox title="Mes commandes"  onClick={() => handleBoxClick('Mes commandes')} />
            <LeftBox title="Mon compte" onClick={() => handleBoxClick('Mon compte')} />
            <LeftBox title="Mes adresses"  onClick={() => handleBoxClick('Mes adresses')} />
            <LeftBox title="Mes commentaires"  onClick={() => handleBoxClick('Mes commentaires')} />
          </div>
        }

        <div className="hidden lg:flex flex-col sm:w-1/2 lg:w-1/4">
          <LeftBox title="Mes commandes"  onClick={() => handleBoxClick('Mes commandes')} />
          <LeftBox title="Mon compte" onClick={() => handleBoxClick('Mon compte')} />
          <LeftBox title="Mes adresses"  onClick={() => handleBoxClick('Mes adresses')} />
          <LeftBox title="Mes commentaires"  onClick={() => handleBoxClick('Mes commentaires')} />
        </div>
        
        <div className="flex flex-col lg:w-3/4 sm:w-full mr-1 self-stretch lg:self-auto"> 
          {RenderRightContent()}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="block w-1/7 text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={handleLogout}>
          Me déconnecter
        </button>
      </div>
    </div>
  );
};

export default MyAccountView;

