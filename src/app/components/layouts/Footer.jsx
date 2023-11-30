import { NavLink } from 'react-router-dom';

/**
 * View/Page Login
 *
 * @author Kathleen Vierstraete
 */
const Footer = () => {
   
const footers1 = [ "Qui sommes nous?", "Conditions générales de la marketplace", "Conditions générales de vente",
"Conditions générales d'utilisation de compte", "Données personnelles", "Mentions légales", "Rappels produits", "Cookies", "Gérer mes préférences cookies", "Conditions de publication d\'avis"]

const footers2 = [ "Voir ou suivre vos commandes", "Contactez nous", "Reprise de vos anciens appareils", "Tarifs et  options de livraison", "Retours et remplacements" , "Accéssibilité" ]

const footers3 = ["Facebook" , "Twitter" , "Linkedin"]

return (

        <footer
          class="bg-neutral-200 text-center text-neutral-600 lg:text-left mt-5">
        
          <div class="mx-6 py-10 text-center md:text-left ">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  A propos
                </h6>  
  
                {footers1.map((footer1) => (

                  <p class="mb-4">
                  <a href="#!" class="text-neutral-600">
                    {footer1}
                  </a>
                  </p>    
                ))}

              </div>

              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Aide, SAV & Services 
                </h6>  

                {footers2.map((footer2) => (

                  <p class="mb-4">
                  <a href="#!" class="text-neutral-600">
                    {footer2}
                  </a>
                  </p>    
                  ))}
              </div>

              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Suivez nous
                </h6>  

                  {footers3.map((footer3) => (

                    <p class="mb-4">
                    <a href="#!" class="text-neutral-600">
                      {footer3}
                    </a>
                    </p>    
                    ))}
              </div>

              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Newsletter
                </h6> 

                <div>
                  <input type="text" id="small-input" class=" mb-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"/>
                </div>

                <div>
                  <button
                    type="button"
                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Subscribe
                  </button>
                </div>

              </div>
            </div>
          </div>

          
        
    
          <div class="bg-neutral-300 p-6 text-center">
            <span>© 2023 Copyright : </span>
            <a
              class="font-semibold text-neutral-600"
              href="https://tw-elements.com/"
              >Pixel Perfect</a
            >
          </div>
        </footer>
            
    )
}

export default Footer;
