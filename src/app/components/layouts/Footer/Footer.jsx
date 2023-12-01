import { footers1, footers2, footers3 } from "../../../constants/footer/footerConstant";
import { NewsletterInput } from "./NewsletterInput";

import { FooterLinks } from "./FooterLinks";

/**
 * View/Page Login
 *
 * @author Kathleen Vierstraete
 */
const Footer = () => {

return (

  <footer className="bg-blue-600 text-center text-white lg:text-left mt-5">
    <div className="mx-6 py-10 text-center md:text-left ">      
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4"> 
        <div className=""> 
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start text-white">
            A propos      
          </h6>          
            <FooterLinks links={footers1} />        
        </div>
              
        <div className="">
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
            Aide, SAV & Services       
          </h6>            
            <FooterLinks links={footers2} />   
        </div>          
                     
        <div className="">          
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
            Suivez nous      
          </h6>          
            <FooterLinks links={footers3} />    
        </div>
                    
        <div className="">
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
            Newsletter      
          </h6>
          <p className="mb-4 "> Ne manquez aucun bon plan et inscrivez vous à notre newsletter !
          </p>             
            <div>
              <NewsletterInput />
            </div>        
        </div>
      </div>
    </div>         
                        
      <div className="bg-blue-600 p-6 text-center">    
        <span>© 2023 Copyright : </span>    
            <a className="font-semibold text-white" href="#">
              Pixel Perfect  
            </a>  
      </div>        
  </footer>
  )
}

export default Footer;
