import React from 'react';
import { useSelector } from "react-redux";
import { selectUser, signOut } from "../redux-store/authenticationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { URL_CONNEXION } from "../constants/urls/urlFrontEnd";




const MyAccount = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate()



    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(signOut());
        navigate(URL_CONNEXION);
    };

  return (
    <div className='mx-auto mb-32'>
        <div className="flex justify-center ">
            <h5 className="mb-40 font-SilkScreen">Bonjour {user.userFirstName}</h5>
        </div>

  <div className="grid grid-cols-2 lg:grid-cols-2 place-items-center">
    <div className="grid-col md:grid-cols-1 lg:grid-col-2">
      <div className="mb-14">
        <h6 className="mb-1 flex justify-center font-bold md:justify-start ">
          Mon profil
        </h6>

        <a href="#" className="underline flex justify-center md:justify-start">
          Voir mon profil
        </a>
      </div>

      <div className="mb-6">
        <h6 className="mb-1 flex justify-center font-bold md:justify-start">
          Mes adresses
        </h6>

        <a href="#" className="underline flex justify-center md:justify-start">
          Gérer mes adresses
        </a>
      </div>
    </div>

    <div className="grid-col md:grid-cols-1 lg:grid-col-2">
      <div className="mb-14">
        <h6 className="mb-1 flex justify-center font-bold md:justify-start">
          Mes commandes
        </h6>

        <a href="#" className="underline flex justify-center md:justify-start">
          Afficher mes commandes
        </a>
      </div>

      <div className="mb-6">
        <h6 className="mb-1 flex justify-center font-bold md:justify-start">
          Mes produits préférés
        </h6>

        <a href="#" className="underline flex justify-center md:justify-start">
          Voir mes produits préférés
        </a>
      </div>
    </div>
  </div>


        <div className="flex justify-center mt-20 ">
            <button className="block w-1/7 text-left py-2 px-4 rounded-lg hover:bg-primary-light" onClick={handleLogout}>
            Me déconnecter
            </button>
        </div>
</div>



    
  );
};

export default MyAccount;