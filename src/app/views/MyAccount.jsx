import React from 'react';
import { useSelector } from "react-redux";
import { selectUser} from "../redux-store/authenticationSlice";



const MyAccount = () => {


    const user = useSelector(selectUser);

  return (
    <div className='mx-auto'>
  <div className="flex justify-center">
    <h5 className="mb-10 font-SilkScreen">Bonjour {user.userFirstName}</h5>
  </div>

  <div className="grid grid-cols-2 lg:grid-cols-2 place-items-center">
    <div className="grid-col md:grid-cols-1 lg:grid-col-2 mb-5">
      <div className="mb-6">
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

    <div className="grid-col md:grid-cols-1 lg:grid-col-2 mb-5">
      <div className="mb-6">
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
</div>



    
  );
};

export default MyAccount;