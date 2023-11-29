import { NavLink } from 'react-router-dom';

/**
 * View/Page Login
 *
 * @author Kathleen Vierstraete
 */
const Footer = () => {
   
return (
        <footer
          class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left border-2 mt-5">
        
          <div class="mx-6 py-10 text-center md:text-left ">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  A propos
                </h6>  
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Qui sommes nous?
                  </a>
                </p>    
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Conditions générales de la marketplace
                  </a>                 
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Conditions générales de vente
                  </a>                 
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Conditions générales d'utilisation de compte
                  </a>                 
                </p> 
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Données personnelles 
                  </a>                 
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Mentions légales
                  </a>                 
                </p> 
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Rappels produits
                  </a>                 
                </p> 
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Cookies
                  </a>                 
                </p>  
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Gérer mes préférences cookies
                  </a>                 
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Conditions de publication d'avis
                  </a>                 
                </p>     
              </div>

              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Aide, SAV & Services 
                </h6>  
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Voir ou suivre vos commandes
                  </a>
                </p>    
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Contactez nous
                  </a>                 
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Reprise de vos anciens appareils
                  </a>                 
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Tarifs et options de livraison
                  </a>                 
                </p> 
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Retours et remplacements 
                  </a>                 
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Accéssibilité
                  </a>                 
                </p>  
              </div>

              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Suivez nous
                </h6>  
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Facebook
                  </a>
                </p> 
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Twitter
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    Linkedin
                  </a>
                </p>
              </div>

              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Newsletter
                </h6> 

                <div>
                  <input type="text" id="small-input" class=" mb-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>

                <div>
                  <button
                    type="button"
                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Subscribe
                  </button>
                </div>

              </div>
            </div>
          </div>

          
        
    
          <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
            <span>© 2023 Copyright : </span>
            <a
              class="font-semibold text-neutral-600 dark:text-neutral-400"
              href="https://tw-elements.com/"
              >Pixel Perfect</a
            >
          </div>
        </footer>
            
    )
}

export default Footer;