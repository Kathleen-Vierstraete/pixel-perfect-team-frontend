import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser, signOut } from "../redux-store/authenticationSlice";
import { useDispatch } from "react-redux";
import {  Link, useNavigate } from 'react-router-dom';
import { URL_CONNEXION } from "../constants/urls/urlFrontEnd";


const MyAccount = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [activeBox, setActiveBox] = useState(null);

    const handleBoxClick = (title) => {
      setActiveBox(title);
    };

    const renderRightContent = () => {
        switch (activeBox) {
          case 'Mon compte':
            return <RightContent content="Vos informations de compte seront affichées ici." />;
          case 'Mes adresses':
            return <RightContent content="Vos adresses seront affichées ici." />;
          case 'Mes commentaires':
            return <RightContent content="Vos commentaires seront affichés ici." />;
          default:
            return <RightContent content="Mes commandes seront affichées ici." />;;
        }
      };
    


    const handleLogout = () => {
        dispatch(signOut());
        navigate(URL_CONNEXION);
    };

    const LeftBox = ({ title, link, onClick }) => {
        return (
          <Link to={link} className="flex flex-col justify-center items-center bg-white p-4 shadow-md" onClick={onClick}>
            <h5 className="font-bold mb-2">{title}</h5>
            <p className="text-gray-600">En savoir plus</p>
          </Link>
        );
      };

      const RightContent = ({ content }) => {
        return (
          <div className="bg-white p-4 shadow-md">
            {content}
          </div>
        );
      };
  
  return (
    <div className='mx-auto mb-32'>
        <div className="flex justify-center ">
            <h5 className="mb-40 font-SilkScreen">Bonjour {user.userFirstName}</h5>
        </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-1/4">
          <LeftBox title="Mes commandes"  onClick={() => handleBoxClick('Mes commandes')} />
          <LeftBox title="Mon compte" onClick={() => handleBoxClick('Mon compte')} />
          <LeftBox title="Mes adresses"  onClick={() => handleBoxClick('Mes adresses')} />
          <LeftBox title="Mes commentaires"  onClick={() => handleBoxClick('Mes commentaires')} />
        </div>
        <div className="flex flex-col w-3/4">
          {renderRightContent()}
        </div>
      </div>
    </div>

  );
};

export default MyAccount;

