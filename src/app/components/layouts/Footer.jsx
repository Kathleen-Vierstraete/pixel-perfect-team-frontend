import { NavLink } from 'react-router-dom';

/**
 * View/Page Login
 *
 * @author Kathleen Vierstraete
 */
const Footer = () => {
   
const footers1 = [ 
  
  {id : 1,  name :"Qui sommes nous?" },
  {id : 2,  name :"Conditions générales de la marketplace" },
  {id : 3,  name :"Conditions générales de vente" },
  {id : 4,  name :"Conditions générales d'utilisation de compte" },
  {id : 5,  name :"Données personnelles" },            
  {id : 6,  name :"Mentions légales" },           
  {id : 7,  name :"Rappels produits" },   
  {id : 8,  name :"Cookies" }, 
  {id : 9,  name :"Gérer mes préférences cookies" }, 
  {id : 10, name :"Conditions de publication d\'avis" },             
];

const footers2 = [ 
  
  {id : 1,  name :"Voir ou suivre vos commandes" },
  {id : 2,  name :"Contactez nous" },
  {id : 3,  name :"Reprise de vos anciens appareils" },
  {id : 4,  name :"Tarifs et  options de livraisone" },
  {id : 5,  name :"Retours et remplacements" },            
  {id : 6,  name :"Accessibilité" },                       
];
            

const footers3 = [ 
  
  {id : 1,  name :"Facebook" },
  {id : 2,  name :"Twitter" },
  {id : 3,  name :"Linkedin" },
]

return (

        <footer
          className="bg-neutral-200 text-center text-neutral-600 lg:text-left mt-5">
        
          <div className="mx-6 py-10 text-center md:text-left ">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  A propos
                </h6>  
  
                {footers1.map((footer1) => (

                  <p key={footer1.id} className="mb-4">
                  <a href="#!" className="text-neutral-600 ">
                    {footer1.name}
                  </a>
                  </p>    
                ))}

              </div>

              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Aide, SAV & Services 
                </h6>  

                {footers2.map((footer2) => (

                  <p key={footer2.id} className="mb-4">
                  <a href="#!" className="text-neutral-600">
                    {footer2.name}
                  </a>
                  </p>    
                  ))}
              </div>

              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Suivez nous
                </h6>  

                  {footers3.map((footer3) => (

                    <p key={footer3.id} className="mb-4">
                    <a href="#!" className="text-neutral-600">
                      {footer3.name}
                    </a>
                    </p>    
                    ))}
              </div>

              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Newsletter
                </h6> 

                <div>
                  <input type="text" id="small-input" className=" mb-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"/>
                </div>

                <div>
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Subscribe
                  </button>
                </div>

              </div>
            </div>
          </div>

          
        
    
          <div className="bg-neutral-300 p-6 text-center">
            <span>© 2023 Copyright : </span>
            <a
              className="font-semibold text-neutral-600"
              href="https://tw-elements.com/"
              >Pixel Perfect</a
            >
          </div>
        </footer>
            
    )
}

export default Footer;
